import { MeetupEvent } from '@/lib/meetup'

interface EventCardProps {
  event: MeetupEvent
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-DK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function formatTime(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-DK', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function EventCard({ event }: EventCardProps) {
  const isPast = event.status === 'PAST'

  return (
    <a
      href={event.eventUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group ${isPast ? 'opacity-60' : ''}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
        {/* Date block */}
        <div className="flex-shrink-0">
          <div className={`text-sm uppercase tracking-wider ${isPast ? 'text-dark/40' : 'text-dark/60'}`}>
            {new Date(event.dateTime).toLocaleDateString('en-DK', { month: 'short' })}
          </div>
          <div className={`text-4xl sm:text-5xl font-light ${isPast ? 'text-dark/40' : 'text-dark'}`}>
            {new Date(event.dateTime).getDate()}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 border-t border-dark/10 pt-4 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-12">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className={`text-xl sm:text-2xl font-normal group-hover:text-dark/70 transition-colors ${isPast ? 'text-dark/50' : 'text-dark'}`}>
              {event.title}
            </h3>
            {!isPast && (
              <span className="bg-primary text-dark text-xs font-medium px-3 py-1 rounded-full">
                Upcoming
              </span>
            )}
          </div>

          <div className={`space-y-1 text-sm ${isPast ? 'text-dark/40' : 'text-dark/60'}`}>
            <p>{formatTime(event.dateTime)} – {formatTime(event.endTime)}</p>
            {event.venue && (
              <p>{event.venue.name}, {event.venue.city}</p>
            )}
          </div>

          <p className={`mt-4 text-sm leading-relaxed line-clamp-2 ${isPast ? 'text-dark/30' : 'text-dark/50'}`}>
            {event.description.replace(/\*\*/g, '').replace(/\\#\\#/g, '').substring(0, 150)}...
          </p>
        </div>
      </div>
    </a>
  )
}
