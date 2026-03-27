import { render, screen } from '@testing-library/react'
import AboutPage from '../about/page'

// Mock the components
jest.mock('@/components/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header</header>
  }
})

jest.mock('@/components/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>
  }
})

// Mock presentations data
jest.mock('@/lib/meetup', () => ({
  presentations: [
    {
      title: 'Recent Talk 1',
      speaker: 'Speaker 1',
      links: [{ label: 'Slides', url: 'https://example.com/1' }]
    },
    {
      title: 'Recent Talk 2',
      speaker: 'Speaker 2',
      links: [{ label: 'Slides', url: 'https://example.com/2' }]
    }
  ]
}))

describe('About Page', () => {
  it('renders the page heading', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { name: /^About$/i, level: 1 })).toBeInTheDocument()
  })

  it('renders the about section description', () => {
    render(<AboutPage />)
    expect(screen.getByText(/CopenhagenJS is a community group/i)).toBeInTheDocument()
  })

  it('renders header and footer', () => {
    render(<AboutPage />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders the "How does a CopenhagenJS run?" section', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { name: /How does a CopenhagenJS run/i })).toBeInTheDocument()
  })

  it('renders the Code of Conduct section', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { name: /Code of Conduct/i })).toBeInTheDocument()
    expect(screen.getByText(/harassment-free meetup experience/i)).toBeInTheDocument()
  })

  it('renders the "Do you want to help?" section', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { name: /Do you want to help/i })).toBeInTheDocument()
    expect(screen.getByText(/Finding new venues/i)).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { name: /How do I contact you/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Discord/i })).toBeInTheDocument()
  })

  it('renders the logo section', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { name: /Where can I find your logo/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download Logo/i })).toBeInTheDocument()
  })

  it('renders recent presentations', () => {
    render(<AboutPage />)
    expect(screen.getByText('Recent Talk 1')).toBeInTheDocument()
    expect(screen.getByText('Recent Talk 2')).toBeInTheDocument()
  })

  it('renders link to all presentations', () => {
    render(<AboutPage />)
    expect(screen.getByRole('link', { name: /View all presentations/i })).toHaveAttribute('href', '/presentations')
  })
})
