import fs from 'fs'
import path from 'path'
import HeroSlider from './HeroSlider'
import { BASE_PATH } from '@/lib/constants'

function getSliderImages(): string[] {
  const sliderDir = path.join(process.cwd(), 'public/pictures/slider')
  const files = fs.readdirSync(sliderDir)
  return files
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort()
    .map(file => `${BASE_PATH}/pictures/slider/${file}`)
}

export default function Hero() {
  const images = getSliderImages()
  return <HeroSlider images={images} />
}
