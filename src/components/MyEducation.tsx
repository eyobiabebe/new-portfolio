import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaLaptopCode, FaAward } from 'react-icons/fa'

interface EducationItem {
  institution: string
  degree: string
  fieldOfStudy: string
  startYear: number
  endYear: number | 'Present'
  location?: string
  cgpa?: string
  description?: string
  projectTitle?: string
  projectTech?: string
}

const educationData: EducationItem[] = [
  {
    institution: 'Debre Tabor University',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    startYear: 2021,
    endYear: 2025,
    location: 'Ethiopia',
    cgpa: '3.53',
    projectTitle: 'Online Bidding System',
    projectTech: 'MongoDB, Express.js, React, Node.js (MERN Stack)',
    description:
      'Graduated with solid knowledge in software engineering, full-stack development, and computer science fundamentals.',
  },
]

const containerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function MyEducation() {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white max-w-5xl mx-auto px-4"
      aria-labelledby="education-title"
    >
      <h2
        id="education-title"
        className="text-4xl font-extrabold text-center mb-14 relative inline-block"
      >
        🎓 My Education
      </h2>

      <div className="space-y-10">
        {educationData.map((edu, idx) => (
          <motion.article
            key={edu.institution + edu.degree}
            className="relative group bg-white dark:bg-gray-800 p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
          >
            <div className="absolute -left-6 top-6 bg-blue-500 text-white p-3 rounded-full shadow-md group-hover:rotate-6 transition-transform">
              <FaGraduationCap className="text-lg" />
            </div>

            <header className="mb-4">
              <h3 className="text-2xl font-bold group-hover:underline underline-offset-4 decoration-blue-400">
                {edu.degree} in {edu.fieldOfStudy}
              </h3>
              <p className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                {edu.institution} &nbsp;|&nbsp;
                <FaCalendarAlt className="ml-4 mr-2 text-blue-500" />
                {edu.startYear} - {edu.endYear}
              </p>
              {edu.cgpa && (
                <div className="inline-flex items-center mt-2 text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full">
                  <FaAward className="mr-2 text-yellow-300" />
                  CGPA: {edu.cgpa}
                </div>
              )}
            </header>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {edu.description}
            </p>

            {edu.projectTitle && (
              <div className="mt-4 text-sm text-gray-800 dark:text-gray-200">
                <div className="flex items-center font-semibold mb-1">
                  <FaLaptopCode className="mr-2 text-green-500" />
                  Senior Project: {edu.projectTitle}
                </div>
                <p className="ml-6 text-gray-600 dark:text-gray-400">
                  Tech Stack: <span className="font-medium">{edu.projectTech}</span>
                </p>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
