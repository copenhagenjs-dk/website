'use client'

import { useState } from 'react'
import { MeetupEvent } from '@/lib/meetup'
import EventCard from './EventCard'

interface PastEventsProps {
  events: MeetupEvent[]
}

export default function PastEvents({ events }: PastEventsProps) {
  const [visibleCount, setVisibleCount] = useState(9)

  const visibleEvents = events.slice(0, visibleCount)
  const hasMore = visibleCount < events.length

  return (
    <div className="mt-20 sm:mt-32 pt-12 border-t border-dark/10">
      <h2 className="text-2xl sm:text-3xl font-light text-dark/50 mb-12">Past Events</h2>
      {visibleEvents.length > 0 ? (
        <>
          <div className="space-y-8">
            {visibleEvents.map((event) => (
              <div key={event.id} className="pb-8 border-b border-dark/5 last:border-0">
                <EventCard event={event} />
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="text-sm text-dark/60 hover:text-dark transition-colors border border-dark/20 px-6 py-3 rounded-full hover:border-dark/40"
              >
                Load more events
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-dark/40 py-12">No past events found.</p>
      )}
    </div>
  )
}
