'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Image from 'next/image'  // import Image

export default function Hero() {
  return (
    <motion.section
      className="h-screen bg-gradient-to-r from-gray-900 via-purple-950 to-black text-white flex items-center justify-center px-4"
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
          <div className="w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/epic.jpg"
            alt="Eyob Abebe"
            width={350}
            height={350}
            className="object-cover w-full h-full"
            priority
          />
        </div>
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
            Website & Mobile App Developer| Node js | React | Next js | React Native | Tailwind CSS | MongoDB | Express js | AI Expert | MERN Stack Developer | Software Engineer | UI/UX Designer
          </motion.p>

          <motion.a
            href="/Eyob_ab_cv.pdf"
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
