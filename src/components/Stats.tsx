import Link from 'next/link'

export default function Stats() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-12 text-center">
          <Link href="/events" className="group">
            <p className="text-5xl sm:text-6xl font-light text-dark mb-2 group-hover:text-dark/70 transition-colors">72+</p>
            <p className="text-dark/70 group-hover:text-dark transition-colors">Meetups Hosted</p>
          </Link>
          <Link href="/presentations" className="group">
            <p className="text-5xl sm:text-6xl font-light text-dark mb-2 group-hover:text-dark/70 transition-colors">100+</p>
            <p className="text-dark/70 group-hover:text-dark transition-colors">Talks Given</p>
          </Link>
          <a href="#testimonials" className="group">
            <p className="text-5xl sm:text-6xl font-light text-dark mb-2 group-hover:text-dark/70 transition-colors">1000+</p>
            <p className="text-dark/70 group-hover:text-dark transition-colors">Community Members</p>
          </a>
        </div>
      </div>
    </section>
  )
}
