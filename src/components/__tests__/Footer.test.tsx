import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the connect heading', () => {
    render(<Footer />)
    expect(screen.getByText('Connect')).toBeInTheDocument()
  })

  it('renders copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/CopenhagenJS. All rights reserved/i)).toBeInTheDocument()
  })

  it('includes social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Discord' })).toBeInTheDocument()
  })
})
