import { Metadata } from 'next'
import Image from 'next/image'
import { BASE_PATH } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about CopenhagenJS, the largest JavaScript community in Copenhagen. Find out how to participate, speak, or help organize our meetups.',
  alternates: {
    canonical: 'https://copenhagenjs-dk.github.io/website/about',
  },
}
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { presentations } from '@/lib/meetup'

export default function AboutPage() {
  const latestPresentations = presentations.slice(0, 2)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-dark tracking-tight mb-8">About</h1>
            <div className="space-y-6 text-lg text-dark/60 font-light leading-relaxed">
              <p>
                CopenhagenJS is a community group in Copenhagen for all JavaScript developers.
                We get together and share things we work on and like. We talk about various
                technologies that we either use daily or aspire to use.
              </p>
              <p>
                CopenhagenJS is for and by the community, so you are more than welcome to talk
                about things that you find interesting and we will assist you with your speaking
                if you are new or have any difficulties. You can contact us by sending a private
                message or comment on{' '}
                <a
                  href="https://www.meetup.com/copenhagenjs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark underline underline-offset-4 decoration-dark/30 hover:decoration-dark"
                >
                  meetup.com
                </a>
                {' '}or any social network where you can find us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section className="bg-light py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-dark tracking-tight mb-8">How does a CopenhagenJS run?</h2>
              <div className="space-y-6 text-dark/60 font-light leading-relaxed">
                <p>
                  A wide range of backgrounds are represented in the group, from occasional users to
                  JavaScript and front end experts. Everyone with an interest in JavaScript is welcome.
                </p>
                <p>
                  In a typical meeting, we start at 17:45. There&apos;s a quick introduction, after that
                  we usually have 2 talks of 20-30 minutes.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-normal text-dark mb-8">Recent Presentations</h3>
              <div className="space-y-6">
                {latestPresentations.map((pres, index) => (
                  <div key={index} className="pb-6 border-b border-dark/10 last:border-0">
                    <h4 className="text-lg text-dark mb-1">{pres.title}</h4>
                    <p className="text-dark/50 text-sm mb-3">by {pres.speaker}</p>
                    <div className="flex flex-wrap gap-4">
                      {pres.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-dark/60 hover:text-dark transition-colors"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/presentations"
                className="inline-flex items-center gap-2 mt-8 text-sm text-dark/60 hover:text-dark transition-colors"
              >
                View all presentations <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="bg-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-light text-dark tracking-tight mb-8">Code of Conduct</h2>
            <div className="space-y-6 text-dark/60 font-light leading-relaxed">
              <p>
                CopenhagenJS aims to provide a harassment-free meetup experience for everyone,
                regardless of gender, gender identity and expression, age, sexual orientation,
                disability, physical appearance, body size, race, ethnicity, religion (or lack
                thereof), or technology choices. We do not tolerate harassment of meetup participants
                in any form.
              </p>
              <p>
                Sexual language and imagery is not appropriate for any meetup venue, including talks,
                workshops, parties, or any online media. Meetup participants violating these rules
                may be sanctioned or expelled from the meetup without a refund at the discretion of
                the meetup organisers.
              </p>
              <p>
                If alcohol is offered at a venue, drink responsibly, respect others choices not to do so.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Contact */}
      <section className="bg-primary py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-dark tracking-tight mb-8">Do you want to help?</h2>
              <div className="space-y-6 text-dark/70 font-light leading-relaxed">
                <p>
                  We really appreciate everyone that wants to help out at CopenhagenJS, please reach
                  out online or during the meetup.
                </p>
                <p>We are looking for help with:</p>
                <ul className="space-y-2 text-dark/80">
                  <li>— Finding new venues for upcoming meetups</li>
                  <li>— Finding speakers that has something they want to share</li>
                  <li>— Helping organizing the raffle/quiz</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-dark tracking-tight mb-8">How do I contact you?</h2>
              <p className="text-dark/70 font-light leading-relaxed">
                Feel free to write to us at{' '}
                <a
                  href="https://www.linkedin.com/company/copenhagenjs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark underline underline-offset-4"
                >
                  LinkedIn
                </a>
                {' '}or{' '}
                <a
                  href="https://discord.gg/bKCH3sP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark underline underline-offset-4"
                >
                  Discord
                </a>
                {' '}channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="bg-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-dark tracking-tight mb-8">Where can I find your logo?</h2>
              <p className="text-dark/60 font-light leading-relaxed mb-8">
                Signage helps people find your building, floor or office if you aren&apos;t located
                somewhere completely obvious. We encourage you to make use of our logo and put up
                signage in relevant places to give our attendees some breadcrumbs to follow.
              </p>
              <a
                href={`${BASE_PATH}/logo.png`}
                download="copenhagenjs-logo.png"
                className="inline-flex items-center gap-2 text-sm border border-dark/20 text-dark px-6 py-3 rounded-full hover:border-dark transition-colors"
              >
                Download Logo (PNG)
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src={`${BASE_PATH}/logo.png`}
                alt="CopenhagenJS Logo"
                width={240}
                height={240}
                className="opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
