import { MetadataRoute } from 'next'
import { BASE_PATH } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CopenhagenJS',
    short_name: 'CopenhagenJS',
    description: 'The largest JavaScript community in Copenhagen',
    start_url: `${BASE_PATH}/`,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f7df1e',
    icons: [
      {
        src: `${BASE_PATH}/icon-192.png`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: `${BASE_PATH}/icon-512.png`,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
