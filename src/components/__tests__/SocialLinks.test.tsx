import { render, screen } from '@testing-library/react'
import SocialLinks from '../SocialLinks'

describe('SocialLinks', () => {
  it('renders LinkedIn link', () => {
    render(<SocialLinks />)
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/copenhagenjs')
  })

  it('renders Discord link', () => {
    render(<SocialLinks />)
    const discordLink = screen.getByRole('link', { name: 'Discord' })
    expect(discordLink).toBeInTheDocument()
    expect(discordLink).toHaveAttribute('href', 'https://discord.gg/copenhagenjs')
  })

  it('opens links in new tab', () => {
    render(<SocialLinks />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('does not render Facebook link', () => {
    render(<SocialLinks />)
    expect(screen.queryByRole('link', { name: 'Facebook' })).not.toBeInTheDocument()
  })
})
