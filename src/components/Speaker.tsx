'use client'

import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const Speaker = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Educators Speak</h2>

        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 text-left relative">
          {/* 5 Fully Colored Stars */}
          <div className="flex items-center mb-6 justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="text-yellow-400 fill-yellow-400"
                fill="currentColor"
              />
            ))}
          </div>

          <p className="text-gray-700 italic mb-6">
            “Eyob Abebe is a passionate developer and a dedicated lifelong learner. 
            With a strong commitment to building innovative solutions and sharing knowledge 
            with others, he approaches every project with creativity, curiosity, and collaboration. 
            Whether writing clean code, designing intuitive user interfaces, or helping others grow, 
            he consistently strives to make a positive impact and contribute meaningfully to the tech community.”
          </p>

          <div className="flex items-center gap-4">
            {/* Profile Placeholder */}
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
              M
            </div>

            <div>
              <p className="text-gray-900 font-semibold">Mr. Moges Tsegaw</p>
              <p className="text-sm text-gray-600">Head, Computer Science Department</p>
              <a
                href="mailto:moges.tsegaw@dtu.edu.et"
                className="text-blue-600 hover:underline text-sm"
              >
                moges.tsegaw@dtu.edu.et
              </a>
            </div>
          </div>

          {/* University Logo */}
          <div className="absolute bottom-4 right-4">
            <Image
              src="/images/Logo.jpeg"
              alt="DTU University Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speaker
