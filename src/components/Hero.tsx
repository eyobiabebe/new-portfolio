'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Image from 'next/image'  // import Image

export default function Hero() {
  return (
    <motion.section
      className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/Eyobpic.png"
            alt="Eyob Abebe"
            width={288}  // 72 * 4 (tailwind's w-72 is 18rem = 288px)
            height={288} // same for height
            className="rounded-full shadow-2xl border-4 border-white object-cover"
            priority // optional: loads image eagerly for hero section
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 12,
              delay: 0.6,
            }}
          >
            Hi, I&apos;m <span className="text-yellow-300">Eyob</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Web Developer & Mobile App Developer crafting smooth, modern, and responsive experiences.
          </motion.p>

          <motion.a
            href="/Eyob_CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} /> Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
