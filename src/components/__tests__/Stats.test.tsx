import { render, screen } from '@testing-library/react'
import Stats from '../Stats'

describe('Stats', () => {
  it('renders meetups hosted count with link to events', () => {
    render(<Stats />)
    expect(screen.getByText('72+')).toBeInTheDocument()
    expect(screen.getByText('Meetups Hosted')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /72\+.*Meetups Hosted/i })).toHaveAttribute('href', '/events')
  })

  it('renders talks given count with link to presentations', () => {
    render(<Stats />)
    expect(screen.getByText('100+')).toBeInTheDocument()
    expect(screen.getByText('Talks Given')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /100\+.*Talks Given/i })).toHaveAttribute('href', '/presentations')
  })

  it('renders community members count with link to testimonials', () => {
    render(<Stats />)
    expect(screen.getByText('1000+')).toBeInTheDocument()
    expect(screen.getByText('Community Members')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /1000\+.*Community Members/i })).toHaveAttribute('href', '#testimonials')
  })
})
