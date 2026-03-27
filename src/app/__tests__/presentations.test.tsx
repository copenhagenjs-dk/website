import { render, screen } from '@testing-library/react'
import PresentationsPage from '../presentations/page'

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
      title: 'Test Presentation',
      speaker: 'Test Speaker',
      links: [{ label: 'Slides', url: 'https://example.com/slides' }]
    },
    {
      title: 'Another Talk',
      speaker: 'Another Speaker',
      links: [{ label: 'GitHub', url: 'https://github.com/test' }]
    }
  ]
}))

describe('Presentations Page', () => {
  it('renders the page heading', () => {
    render(<PresentationsPage />)
    expect(screen.getByRole('heading', { name: /Presentations/i, level: 1 })).toBeInTheDocument()
  })

  it('renders the page description', () => {
    render(<PresentationsPage />)
    expect(screen.getByText(/Slides, repos, and resources/i)).toBeInTheDocument()
  })

  it('renders header and footer', () => {
    render(<PresentationsPage />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders presentation titles', () => {
    render(<PresentationsPage />)
    expect(screen.getByText('Test Presentation')).toBeInTheDocument()
    expect(screen.getByText('Another Talk')).toBeInTheDocument()
  })

  it('renders speaker names', () => {
    render(<PresentationsPage />)
    expect(screen.getByText(/by Test Speaker/)).toBeInTheDocument()
    expect(screen.getByText(/by Another Speaker/)).toBeInTheDocument()
  })

  it('renders presentation links', () => {
    render(<PresentationsPage />)
    expect(screen.getByRole('link', { name: /Slides/i })).toHaveAttribute('href', 'https://example.com/slides')
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/test')
  })
})
