import { render, screen } from '@testing-library/react'
import Home from '../page'

// Mock the components
jest.mock('@/components/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header</header>
  }
})

jest.mock('@/components/Hero', () => {
  return function MockHero() {
    return <section data-testid="hero">Hero</section>
  }
})

jest.mock('@/components/Events', () => {
  return function MockEvents() {
    return <section data-testid="events">Events</section>
  }
})

jest.mock('@/components/Stats', () => {
  return function MockStats() {
    return <section data-testid="stats">Stats</section>
  }
})

jest.mock('@/components/Testimonials', () => {
  return function MockTestimonials() {
    return <section data-testid="testimonials">Testimonials</section>
  }
})

jest.mock('@/components/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>
  }
})

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('events')).toBeInTheDocument()
    expect(screen.getByTestId('stats')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders in correct order', () => {
    render(<Home />)

    const main = screen.getByRole('main')
    const children = Array.from(main.children)

    expect(children[0]).toHaveAttribute('data-testid', 'header')
    expect(children[1]).toHaveAttribute('data-testid', 'hero')
    expect(children[2]).toHaveAttribute('data-testid', 'events')
    expect(children[3]).toHaveAttribute('data-testid', 'stats')
    expect(children[4]).toHaveAttribute('data-testid', 'testimonials')
    expect(children[5]).toHaveAttribute('data-testid', 'footer')
  })
})
