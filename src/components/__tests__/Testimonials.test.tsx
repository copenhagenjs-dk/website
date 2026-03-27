import { render, screen } from '@testing-library/react'
import Testimonials from '../Testimonials'

describe('Testimonials', () => {
  it('renders the "What People Say" heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What People Say/i })).toBeInTheDocument()
  })

  it('renders the feedback description', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Feedback from our amazing community members/i)).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Always learn something new and meet great people/i)).toBeInTheDocument()
  })

  it('renders the "Join Our Community" CTA section', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Join Our Community/i })).toBeInTheDocument()
  })

  it('renders the meetup link', () => {
    render(<Testimonials />)
    const link = screen.getByRole('link', { name: /Join on Meetup.com/i })
    expect(link).toHaveAttribute('href', 'https://www.meetup.com/copenhagenjs/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the about page link', () => {
    render(<Testimonials />)
    const link = screen.getByRole('link', { name: /Learn more about us/i })
    expect(link).toHaveAttribute('href', '/about')
  })
})
