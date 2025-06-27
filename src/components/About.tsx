'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'  // Import Image here

export default function About() {
  const techStack = [
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'Node.js', icon: '/tech/nodedotjs.svg' },
    { name: 'MongoDB', icon: '/tech/mongodb.svg' },
    { name: 'Express', icon: '/tech/express.svg' },
    { name: 'Python', icon: '/tech/python.svg' },
    { name: 'FastAPI', icon: '/tech/fastapi.svg' },
    { name: 'Tailwind CSS', icon: '/tech/tailwindcss.svg' },
    { name: 'Framer Motion', icon: '/tech/framer.svg' },
  ]

  const timeline = [
    {
      year: '2025 – Present',
      title: 'web and app Developer',
      desc: 'Working on freelance, building scalable web applications and user-friendly interfaces.',
    },
    {
      year: '2023 – 2024',
      title: 'Created a Online Bidding System',
      desc: 'Built with the MERN Stack..',
    },
    {
      year: '2019 – 2025',
      title: 'Computer Science Graduate',
      desc: 'Graduated with a strong focus on full-stack development and modern software engineering practices.',
    },
  ]

  return (
    <motion.section
      id="about"
      className="py-20 px-6 md:px-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/animedev.png"
            alt="Eyob Abebe"
            width={320}   // md:w-80 = 20rem = 320px
            height={320}
            className="rounded-3xl shadow-xl border-4 border-white dark:border-gray-800 object-cover"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Computer Science graduate with a strong background in full-stack development, specializing in the MERN stack and network systems. Passionate about building interactive web applications and delivering efficient, scalable solutions.
          </p>
          <p className="text-lg mb-6">
            Proficient in both frontend and backend technologies, with a keen eye for problem-solving and optimizing performance across all layers of the tech stack.
          </p>

          {/* Contact info with icons */}
          <p className="mb-3 flex items-center justify-center md:justify-start gap-2 text-lg">
            <Mail className="w-5 h-5 text-blue-600" />
            <a
              href="mailto:eyobabebe721@gmail.com"
              className="text-blue-600 hover:underline"
            >
              eyobabebe721@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-lg">
            <Phone className="w-5 h-5 text-blue-600" />
            <a
              href="tel:+251948837169"
              className="text-blue-600 hover:underline"
            >
              +251 948 83 71 69
            </a>
          </p>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="flex flex-col items-center transition duration-300"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={48}    // w-12 = 3rem = 48px
                height={48}
                className="mb-2"
              />
              <p className="text-sm">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        className="mt-20 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-8 text-center">My Journey</h3>
        <ul className="relative border-l-4 border-blue-600 pl-6 space-y-10">
          {timeline.map((item, index) => (
            <li key={index} className="relative group">
              <div className="absolute -left-[14px] top-1.5 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 group-hover:scale-125 transition" />
              <h4 className="text-xl font-bold">{item.year}</h4>
              <p className="text-blue-600 font-medium">{item.title}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  )
}
