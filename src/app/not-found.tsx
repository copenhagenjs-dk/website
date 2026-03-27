import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center bg-white py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-8xl sm:text-9xl font-light text-primary mb-6">404</p>
          <h1 className="text-3xl sm:text-4xl font-light text-dark tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-dark/60 font-light mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full hover:bg-dark/90 transition-colors"
          >
            Back to Home
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
