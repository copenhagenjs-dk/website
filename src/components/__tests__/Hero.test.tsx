import { render, screen } from '@testing-library/react'
import HeroSlider from '../HeroSlider'

const mockImages = ['/pictures/slider/cphjs-01.jpg', '/pictures/slider/cphjs-02.jpg']

describe('HeroSlider', () => {
  it('renders the main heading', () => {
    render(<HeroSlider images={mockImages} />)
    expect(screen.getByRole('heading', { name: /Copenhagen JavaScript/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<HeroSlider images={mockImages} />)
    expect(screen.getByText(/largest JavaScript community in Copenhagen/i)).toBeInTheDocument()
  })

  it('renders the background image slider', () => {
    render(<HeroSlider images={mockImages} />)
    expect(screen.getByAltText('CopenhagenJS meetup')).toBeInTheDocument()
  })
})
