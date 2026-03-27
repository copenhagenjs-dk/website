'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_PATH } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md py-5 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={`${BASE_PATH}/logo.png`}
              alt="CopenhagenJS"
              width={36}
              height={36}
              className="transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-semibold tracking-tight text-dark">CopenhagenJS</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark hover:text-dark/70 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-dark/70 hover:text-dark transition-colors">
              Home
            </Link>
            <Link href="/events" className="text-sm text-dark/70 hover:text-dark transition-colors">
              Events
            </Link>
            <Link href="/presentations" className="text-sm text-dark/70 hover:text-dark transition-colors">
              Presentations
            </Link>
            <Link href="/about" className="text-sm text-dark/70 hover:text-dark transition-colors">
              About
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 flex flex-col gap-5 pb-4">
            <Link
              href="/"
              className="text-2xl font-light text-dark hover:text-dark/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-2xl font-light text-dark hover:text-dark/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/presentations"
              className="text-2xl font-light text-dark hover:text-dark/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Presentations
            </Link>
            <Link
              href="/about"
              className="text-2xl font-light text-dark hover:text-dark/70 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
