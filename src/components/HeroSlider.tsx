'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroSliderProps {
  images: string[]
}

export default function HeroSlider({ images }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-end overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex]}
          alt="CopenhagenJS meetup"
          fill
          className="object-cover transition-all duration-1000 ease-out scale-105"
          sizes="100vw"
          priority
        />
        {/* Elegant gradient overlay with shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-dark/10" />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white mb-6 leading-[1.1] tracking-tight">
            Copenhagen<br />
            <span className="font-normal">JavaScript</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-xl font-light leading-relaxed">
            Join the largest JavaScript community in Copenhagen. We meet monthly to share knowledge,
            network, and have fun with fellow developers.
          </p>
        </div>
      </div>
    </section>
  )
}
