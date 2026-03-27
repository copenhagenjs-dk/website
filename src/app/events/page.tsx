import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming and past CopenhagenJS meetup events. Join us for JavaScript talks, networking, and community fun in Copenhagen.',
  alternates: {
    canonical: 'https://copenhagenjs-dk.github.io/website/events',
  },
}
import Footer from '@/components/Footer'
import EventCard from '@/components/EventCard'
import PastEvents from '@/components/PastEvents'
import { fetchMeetupEvents } from '@/lib/meetup'

export const revalidate = 3600 // Revalidate every hour

export default async function EventsPage() {
  const { upcoming, past } = await fetchMeetupEvents()

  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 sm:mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-dark tracking-tight mb-6">Events</h1>
            <p className="text-lg text-dark/60 font-light">
              All our meetups from{' '}
              <a
                href="https://www.meetup.com/copenhagenjs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-dark/70 underline underline-offset-4 decoration-dark/30"
              >
                Meetup.com
              </a>
            </p>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-light text-dark mb-12">Upcoming</h2>
            {upcoming.length > 0 ? (
              <div className="space-y-8">
                {upcoming.map((event) => (
                  <div key={event.id} className="pb-8 border-b border-dark/10 last:border-0">
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-dark/50 py-12 font-light">
                No upcoming events scheduled. Check back soon!
              </p>
            )}
          </div>

          {/* Past Events */}
          <PastEvents events={past} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
