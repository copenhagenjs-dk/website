import Link from 'next/link'
import { fetchMeetupEvents } from '@/lib/meetup'
import EventCard from './EventCard'

export default async function Events() {
  const { upcoming } = await fetchMeetupEvents()
  const nextEvent = upcoming[0]

  return (
    <section id="events" className="bg-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-dark tracking-tight">Next Meetup</h2>
        </div>
        <div className="max-w-3xl">
          {nextEvent ? (
            <EventCard event={nextEvent} />
          ) : (
            <div className="py-12 text-center">
              <p className="text-dark/50 text-lg font-light">No upcoming events scheduled. Check back soon!</p>
            </div>
          )}
        </div>
        <div className="mt-12">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm text-dark/70 hover:text-dark transition-colors group"
          >
            View all events
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
