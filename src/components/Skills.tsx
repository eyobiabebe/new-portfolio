'use client'

import React, { useEffect, useState, CSSProperties, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

/* --------------------------------- Skill Bar Component --------------------------------- */
type SkillBarProps = {
  skill: string
  level: number
  inView: boolean
}

function SkillBar({ skill, level, inView }: SkillBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setProgress(level), 100)
      return () => clearTimeout(timeout)
    } else {
      setProgress(0)
    }
  }, [inView, level])

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-gray-800">{skill}</span>
        <span className="text-sm text-gray-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded h-4 overflow-hidden">
        <div
          className="bg-blue-600 h-4 rounded transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

/* --------------------------------- Hover 3D Card Component --------------------------------- */
type Hover3DCardProps = {
  children: ReactNode
}

function Hover3DCard({ children }: Hover3DCardProps) {
  const [style, setStyle] = useState<CSSProperties>({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * 10

    setStyle({
      transform: `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: 'transform 0.1s ease-out',
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(600px) rotateX(0) rotateY(0) scale(1)',
      transition: 'transform 0.5s ease',
    })
  }

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

/* --------------------------------- Skills Section with Partitions --------------------------------- */
export default function Skills() {
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'React Native', level: 90 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Framer Motion', level: 70 },
  ]

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Python', level: 80 },
    { name: 'FastAPI', level: 80 },
  ]

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">My Skills</h2>

        {/* -------- Frontend Skills -------- */}
        <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">Frontend Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {frontendSkills.map(({ name, level }) => (
            <Hover3DCard key={name}>
              <SkillBar skill={name} level={level} inView={inView} />
            </Hover3DCard>
          ))}
        </div>

        {/* -------- Backend Skills -------- */}
        <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">Backend Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {backendSkills.map(({ name, level }) => (
            <Hover3DCard key={name}>
              <SkillBar skill={name} level={level} inView={inView} />
            </Hover3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}
