import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-light mb-4">CopenhagenJS</h3>
            <p className="text-white/60 font-light leading-relaxed">
              The largest JavaScript community in Copenhagen.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/40 mb-4">Connect</h4>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm font-light">
            &copy; {new Date().getFullYear()} CopenhagenJS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
