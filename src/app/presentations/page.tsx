import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Presentations',
  description:
    'Slides, repos, and resources from CopenhagenJS meetup talks. Learn about React, Node.js, TypeScript and more from our community speakers.',
  alternates: {
    canonical: 'https://copenhagenjs-dk.github.io/website/presentations',
  },
}
import Footer from '@/components/Footer'
import { presentations } from '@/lib/meetup'

export default function PresentationsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16 sm:mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-dark tracking-tight mb-6">Presentations</h1>
            <p className="text-lg text-dark/60 font-light">
              Slides, repos, and resources from our meetup talks
            </p>
          </div>

          {presentations.length > 0 ? (
            <div className="grid gap-px bg-dark/10 sm:grid-cols-2 lg:grid-cols-3">
              {presentations.map((pres, index) => (
                <div
                  key={index}
                  className="bg-white p-8 sm:p-10 group"
                >
                  <h3 className="text-xl font-normal text-dark mb-2 leading-snug">
                    {pres.title}
                  </h3>
                  <p className="text-dark/50 text-sm mb-6">by {pres.speaker}</p>

                  <div className="flex flex-wrap gap-3">
                    {pres.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-dark/60 hover:text-dark transition-colors"
                      >
                        {link.label}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-dark/50 font-light">No presentations available yet.</p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
