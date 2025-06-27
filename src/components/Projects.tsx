import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  image: string
  link: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: 'Online Auction System',
    description: 'Frontend built by React, Tailwind, Express, and MongoDB for backend.',
    image: '/images/bid1.jpg',
    link: 'https://github.com/abducodespro/bidding-project.git',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Framer Motion'],
  },
  {
    title: 'User Implementation',
    description: 'I used JS framework and MongoDB.',
    image: '/images/userimp.png',
    link: 'https://github.com/eyobiabebe/User-implementation.git',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
  },
  {
    title: 'CRUD User Management System',
    description: 'Full-stack MERN website with Stripe integration and an admin dashboard.',
    image: '/images/userman.jpeg',
    link: 'https://github.com/eyobiabebe/crud-user-management.git',
    tech: ['React', 'Tailwind', 'MongoDB', 'Framer Motion', 'Stripe'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 text-center"
      aria-labelledby="projects-title"
    >
      <h2
        id="projects-title"
        className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="group relative p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:underline underline-offset-4 decoration-blue-500 transition">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* View Work Button */}
            <div className="flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-2 hover:underline"
              >
                View Work{' '}
                <FaArrowRight className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-blue-400/30 blur-sm"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
