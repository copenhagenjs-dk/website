const fs = require('fs');
const path = require('path');

// Simple fetch implementation for Node.js
async function fetchMeetupData() {
  const query = `
    query getGroupEvents($urlname: String!, $first: Int!, $after: String) {
      groupByUrlname(urlname: $urlname) {
        events(filter: {status: [ACTIVE]}, first: $first, after: $after, sort: DESC) {
          pageInfo { hasNextPage endCursor }
          edges { node { id title dateTime eventUrl description venue { name city } } }
        }
      }
    }
  `;

  const queryPast = `
    query getGroupEvents($urlname: String!, $first: Int!, $after: String) {
      groupByUrlname(urlname: $urlname) {
        events(filter: {status: [PAST]}, first: $first, after: $after, sort: DESC) {
          pageInfo { hasNextPage endCursor }
          edges { node { id title dateTime eventUrl description venue { name city } } }
        }
      }
    }
  `;

  try {
    // Fetch active events
    const activeRes = await fetch('https://www.meetup.com/gql2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operationName: 'getGroupEvents',
        variables: { urlname: 'copenhagenjs', first: 50, after: null },
        query,
      }),
    });

    // Fetch past events (first page only for change detection)
    const pastRes = await fetch('https://www.meetup.com/gql2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operationName: 'getGroupEvents',
        variables: { urlname: 'copenhagenjs', first: 20, after: null },
        query: queryPast,
      }),
    });

    const activeData = await activeRes.json();
    const pastData = await pastRes.json();

    return {
      active: activeData?.data?.groupByUrlname?.events?.edges || [],
      past: pastData?.data?.groupByUrlname?.events?.edges || [],
    };
  } catch (error) {
    console.error('Error fetching meetup data:', error);
    throw error;
  }
}

async function checkForChanges() {
  try {
    // Fetch current data from API
    const currentData = await fetchMeetupData();

    // Create a cache file path
    const cacheFile = path.join(process.cwd(), '.meetup-cache.json');

    // Read previous data if it exists
    let previousData = { active: [], past: [] };
    if (fs.existsSync(cacheFile)) {
      const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
      // Handle both old format (direct data) and new format (with lastSync)
      previousData = cachedData.data || cachedData;
    }

    // Write current data to cache for next time with timestamp
    const cacheData = {
      lastSync: new Date().toISOString(),
      data: currentData
    };
    fs.writeFileSync(cacheFile, JSON.stringify(cacheData, null, 2));

    // Compare data by checking event IDs and titles
    const currentActiveIds = currentData.active.map(e => e.node.id);
    const currentPastIds = currentData.past.map(e => e.node.id);
    const previousActiveIds = (previousData.active || []).map(e => e.node.id);
    const previousPastIds = (previousData.past || []).map(e => e.node.id);

    // Check for changes in active events
    const activeChanges =
      currentActiveIds.length !== previousActiveIds.length ||
      currentActiveIds.some(id => !previousActiveIds.includes(id)) ||
      previousActiveIds.some(id => !currentActiveIds.includes(id));

    // Check for new past events (events that moved from active to past)
    const newPastEvents = currentPastIds.filter(id => !previousPastIds.includes(id));

    if (activeChanges || newPastEvents.length > 0) {
      console.log('Changes detected!');
      if (activeChanges) console.log('- Active events changed');
      if (newPastEvents.length > 0) console.log(`- ${newPastEvents.length} new past events`);
      process.exit(0); // Success - changes found
    } else {
      console.log('No changes detected in meetup data');
      process.exit(1); // No changes
    }
  } catch (error) {
    console.error('Error checking for changes:', error);
    process.exit(1); // Error
  }
}

checkForChanges();