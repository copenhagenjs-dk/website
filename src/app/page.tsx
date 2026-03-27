import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://copenhagenjs-dk.github.io/website',
  },
}
import Hero from '@/components/Hero'
import Events from '@/components/Events'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Events />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  )
}
