import Link from 'next/link'
import testimonials from '@/data/testimonials.json'

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-dark tracking-tight mb-6">
              What People Say
            </h2>
            <p className="text-lg text-dark/60 font-light">
              Feedback from our amazing community members
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-dark/10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 sm:p-12"
              >
                <blockquote className="text-xl sm:text-2xl font-light text-dark leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-dark/60 text-sm font-medium">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-dark font-normal">{testimonial.author}</p>
                    <p className="text-dark/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-dark tracking-tight mb-6">
            Join Our Community
          </h2>
          <p className="text-dark/60 font-light mb-8 max-w-xl mx-auto">
            Be part of Copenhagen&apos;s largest JavaScript community. Join us at our next meetup!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.meetup.com/copenhagenjs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full hover:bg-dark/90 transition-colors"
            >
              Join on Meetup.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-dark/20 text-dark px-8 py-4 rounded-full hover:border-dark transition-colors"
            >
              Learn more about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
