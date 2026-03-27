import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the logo image and text', () => {
    render(<Header />)
    expect(screen.getByAltText('CopenhagenJS')).toBeInTheDocument()
    expect(screen.getByText('CopenhagenJS')).toBeInTheDocument()
  })

  it('has a link to homepage with logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('CopenhagenJS')
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })

  it('renders navigation with Home link', () => {
    render(<Header />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('renders navigation with Events link', () => {
    render(<Header />)
    const eventsLink = screen.getByRole('link', { name: 'Events' })
    expect(eventsLink).toHaveAttribute('href', '/events')
  })

  it('renders navigation with Presentations link', () => {
    render(<Header />)
    const presentationsLink = screen.getByRole('link', { name: 'Presentations' })
    expect(presentationsLink).toHaveAttribute('href', '/presentations')
  })

  it('renders navigation with About link', () => {
    render(<Header />)
    const aboutLink = screen.getByRole('link', { name: 'About' })
    expect(aboutLink).toHaveAttribute('href', '/about')
  })
})
