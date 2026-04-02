import presentationsData from '@/data/presentations.json'

export interface PresentationLink {
  label: string
  url: string
}

export interface PresentationData {
  title: string
  keyword: string
  speaker: string
  links: PresentationLink[]
}

export interface Topic {
  title: string
  speaker: string
  eventTitle: string
  eventDate: string
  eventUrl: string
  presentations?: PresentationLink[]
}

export interface MeetupEvent {
  id: string
  title: string
  eventUrl: string
  description: string
  dateTime: string
  endTime: string
  status: 'ACTIVE' | 'PAST'
  venue: {
    name: string
    address: string
    city: string
  } | null
  going: number
}

// Export presentations data for use in other components
export const presentations: PresentationData[] = presentationsData

interface GraphQLEvent {
  id: string
  title: string
  dateTime: string
  eventUrl: string
  description: string
  venue: {
    name: string
    city: string
  } | null
}

interface GraphQLResponse {
  data?: {
    groupByUrlname?: {
      events?: {
        pageInfo: {
          hasNextPage: boolean
          endCursor: string
        }
        edges: Array<{
          node: GraphQLEvent
        }>
      }
    }
  }
}

async function fetchEventsGraphQL(
  status: 'PAST' | 'ACTIVE',
  cursor?: string
): Promise<{ events: MeetupEvent[]; nextCursor?: string }> {
  const query = `
    query getGroupEvents($urlname: String!, $first: Int!, $after: String) {
      groupByUrlname(urlname: $urlname) {
        events(filter: {status: [${status}]}, first: $first, after: $after, sort: DESC) {
          pageInfo { hasNextPage endCursor }
          edges { node { id title dateTime eventUrl description venue { name city } } }
        }
      }
    }
  `

  const res = await fetch('https://www.meetup.com/gql2', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      operationName: 'getGroupEvents',
      variables: { urlname: 'copenhagenjs', first: 50, after: cursor },
      query,
    }),
    next: { revalidate: 3600 },
  })

  const data: GraphQLResponse = await res.json()
  const eventsData = data?.data?.groupByUrlname?.events

  if (!eventsData) {
    return { events: [] }
  }

  const events: MeetupEvent[] = eventsData.edges.map((edge) => {
    const startTime = new Date(edge.node.dateTime)
    const endTime = new Date(startTime)
    endTime.setHours(21, 0, 0, 0) // Always end at 21:00

    return {
      id: edge.node.id,
      title: edge.node.title,
      eventUrl: edge.node.eventUrl,
      description: edge.node.description || '',
      dateTime: edge.node.dateTime,
      endTime: endTime.toISOString(),
      status,
      venue: edge.node.venue
        ? { name: edge.node.venue.name, address: '', city: edge.node.venue.city }
        : null,
      going: 0,
    }
  })

  return {
    events,
    nextCursor: eventsData.pageInfo.hasNextPage ? eventsData.pageInfo.endCursor : undefined,
  }
}

export async function fetchMeetupEvents(): Promise<{
  upcoming: MeetupEvent[]
  past: MeetupEvent[]
}> {
  const upcoming: MeetupEvent[] = []
  const past: MeetupEvent[] = []

  try {
    // Fetch upcoming events
    const upcomingResult = await fetchEventsGraphQL('ACTIVE')
    upcoming.push(...upcomingResult.events)

    // Fetch all past events with pagination
    let cursor: string | undefined
    do {
      const result = await fetchEventsGraphQL('PAST', cursor)
      past.push(...result.events)
      cursor = result.nextCursor
    } while (cursor)
  } catch (error) {
    console.error('Error fetching Meetup events:', error)
  }

  return { upcoming, past }
}

export function extractTopicsFromEvents(events: MeetupEvent[]): Topic[] {
  const topics: Topic[] = []

  for (const event of events) {
    const description = event.description

    // Match patterns like **Speaker - Title** or **Title - Speaker**
    // Common patterns in the schedule section
    const talkPatterns = [
      /\*\*([^*]+?)\s*[-–:]\s*([^*]+?)\*\*/g,
      /\*\*\*([^*]+?)\s*[-–:]\s*([^*]+?)\*\*\*/g,
    ]

    for (const pattern of talkPatterns) {
      let match
      while ((match = pattern.exec(description)) !== null) {
        const part1 = match[1].trim()
        const part2 = match[2].trim()

        // Skip non-talk entries (schedule items, section headers, etc.)
        const skipWords = [
          'schedule', 'doors', 'welcome', 'break', 'food', 'drinks', 'photo',
          'raffle', 'socializ', 'social', 'community', 'about', 'want to',
          'copenhagenjs', 'stay connected', 'linkedin', 'registration',
          'important', 'looking forward', 'best regards', 'friendly regards'
        ]

        const combined = (part1 + ' ' + part2).toLowerCase()
        if (skipWords.some((word) => combined.includes(word))) {
          continue
        }

        // Skip if too short (likely not a real talk)
        if (part1.length < 3 || part2.length < 3) {
          continue
        }

        // Determine which is speaker and which is title
        // Usually speaker names are shorter and don't contain certain words
        let speaker: string
        let title: string

        const titleIndicators = ['how', 'what', 'why', 'introduction', 'intro to', 'building', 'using']
        const part1LooksLikeTitle = titleIndicators.some((ind) => part1.toLowerCase().includes(ind))
        const part2LooksLikeTitle = titleIndicators.some((ind) => part2.toLowerCase().includes(ind))

        if (part1LooksLikeTitle && !part2LooksLikeTitle) {
          title = part1
          speaker = part2
        } else if (part2LooksLikeTitle && !part1LooksLikeTitle) {
          title = part2
          speaker = part1
        } else if (part1.length > part2.length) {
          title = part1
          speaker = part2
        } else {
          speaker = part1
          title = part2
        }

        // Clean up speaker name (remove common prefixes)
        speaker = speaker.replace(/^by\s+/i, '').trim()

        // Find matching presentation links from JSON data
        const titleLower = title.toLowerCase()
        const speakerLower = speaker.toLowerCase()
        let presentationLinks: PresentationLink[] | undefined

        for (const pres of presentations) {
          if (titleLower.includes(pres.keyword) || speakerLower.includes(pres.keyword)) {
            presentationLinks = pres.links
            break
          }
        }

        topics.push({
          title,
          speaker,
          eventTitle: event.title,
          eventDate: new Date(event.dateTime).toLocaleDateString('en-DK', {
            year: 'numeric',
            month: 'long',
          }),
          eventUrl: event.eventUrl,
          presentations: presentationLinks,
        })
      }
    }
  }

  return topics
}
