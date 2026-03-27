import fs from 'fs'
import path from 'path'
import HeroSlider from './HeroSlider'

function getSliderImages(): string[] {
  const sliderDir = path.join(process.cwd(), 'public/pictures/slider')
  const files = fs.readdirSync(sliderDir)
  return files
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort()
    .map(file => `/pictures/slider/${file}`)
}

export default function Hero() {
  const images = getSliderImages()
  return <HeroSlider images={images} />
}
