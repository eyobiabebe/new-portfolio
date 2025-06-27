import React from 'react'
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
          © {currentYear} <strong>Eyob Abebe</strong>. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/eyobiabebe"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/eyob-abebe-42b4b3311"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://t.me/eyobi_dev"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaTelegramPlane size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
