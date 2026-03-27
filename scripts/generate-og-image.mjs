import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')

const width = 1200
const height = 630
const logoSize = 280

async function generateOgImage() {
  const logo = await sharp(path.join(publicDir, 'logo.png'))
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer()

  // #f7df1e - JavaScript yellow (same as logo/primary color)
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 247, g: 223, b: 30, alpha: 1 }
    }
  })
    .composite([
      {
        input: logo,
        top: Math.round((height - logoSize) / 2),
        left: Math.round((width - logoSize) / 2)
      }
    ])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'))

  console.log('Generated og-image.png (1200x630)')
}

generateOgImage().catch(console.error)
