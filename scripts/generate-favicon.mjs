import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')
const appDir = path.join(__dirname, '..', 'src', 'app')

async function generateFavicons() {
  const logo = path.join(publicDir, 'logo.png')

  // favicon.ico (32x32) - for app directory
  await sharp(logo)
    .resize(32, 32)
    .toFile(path.join(appDir, 'favicon.ico'))
  console.log('Generated favicon.ico (32x32)')

  // icon.png (32x32) - modern browsers
  await sharp(logo)
    .resize(32, 32)
    .png()
    .toFile(path.join(appDir, 'icon.png'))
  console.log('Generated icon.png (32x32)')

  // apple-icon.png (180x180) - Apple touch icon
  await sharp(logo)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'))
  console.log('Generated apple-icon.png (180x180)')

  // PWA icons
  await sharp(logo)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'))
  console.log('Generated icon-192.png (192x192)')

  await sharp(logo)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'))
  console.log('Generated icon-512.png (512x512)')
}

generateFavicons().catch(console.error)
