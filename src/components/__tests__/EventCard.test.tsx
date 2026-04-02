import { render, screen } from '@testing-library/react'
import EventCard from '../EventCard'
import { MeetupEvent } from '@/lib/meetup'

const mockUpcomingEvent: MeetupEvent = {
  id: '123',
  title: 'CopenhagenJS April',
  eventUrl: 'https://www.meetup.com/copenhagenjs/events/123/',
  description: 'Join us for JavaScript talks and networking.',
  dateTime: '2026-04-16T17:15:00+02:00',
  endTime: '2026-04-16T21:00:00+02:00',
  status: 'ACTIVE',
  venue: {
    name: 'Test Venue',
    address: '123 Test St',
    city: 'Aarhus',
  },
  going: 45,
}

const mockPastEvent: MeetupEvent = {
  id: '456',
  title: 'CopenhagenJS March',
  eventUrl: 'https://www.meetup.com/copenhagenjs/events/456/',
  description: 'A past event description.',
  dateTime: '2026-03-19T17:00:00+01:00',
  endTime: '2026-03-19T21:00:00+01:00',
  status: 'PAST',
  venue: null,
  going: 50,
}

describe('EventCard', () => {
  it('renders event title', () => {
    render(<EventCard event={mockUpcomingEvent} />)
    expect(screen.getByText('CopenhagenJS April')).toBeInTheDocument()
  })

  it('renders venue information when available', () => {
    render(<EventCard event={mockUpcomingEvent} />)
    expect(screen.getByText(/Test Venue/)).toBeInTheDocument()
    expect(screen.getByText(/Aarhus/)).toBeInTheDocument()
  })

  it('shows Upcoming badge for active events', () => {
    render(<EventCard event={mockUpcomingEvent} />)
    expect(screen.getByText('Upcoming')).toBeInTheDocument()
  })

  it('does not show Upcoming badge for past events', () => {
    render(<EventCard event={mockPastEvent} />)
    expect(screen.queryByText('Upcoming')).not.toBeInTheDocument()
  })

  it('displays event time range with different start and end times', () => {
    render(<EventCard event={mockUpcomingEvent} />)
    // The event has different start and end times; they should not be identical
    const timeElement = screen.getByText(/\d{2}[.:]\d{2}\s*[–-]\s*\d{2}[.:]\d{2}/)
    expect(timeElement).toBeInTheDocument()
    // Ensure start and end times are not identical
    const timeText = timeElement.textContent ?? ''
    const times = timeText.split('–').map((t) => t.trim())
    expect(times[0]).not.toBe(times[1])
  })

  it('links to meetup event page', () => {
    render(<EventCard event={mockUpcomingEvent} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://www.meetup.com/copenhagenjs/events/123/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
