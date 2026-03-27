import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CopenhagenJS',
    short_name: 'CopenhagenJS',
    description: 'The largest JavaScript community in Copenhagen',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f7df1e',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
