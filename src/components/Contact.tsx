'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm('service_v5pxk71', 'template_j0xc7ad', form.current, 'ZmQM0RFoXVdua6554')
      .then(() => {
        setSuccessMessage('✅ Your message has been sent!');
        setErrorMessage('');
        form.current?.reset();
      })
      .catch(() => {
        setErrorMessage('❌ Failed to send. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-4 text-gray-800">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-10">I'd love to hear about your project or idea!</p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-gray-700">
          <div className="flex items-center gap-2 text-gray-700">
            <Phone size={20} /> <span>+251 948 837 169</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail size={20} /> <span>eyobabebe721@gmail.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12 text-gray-600 text-xl">
          <a
            href="https://github.com/eyobiabebe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/eyob-abebe-42b4b3311"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://t.me/eyobi_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
          >
            <FaTelegramPlane size={24} />
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
            required
          ></textarea>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </motion.button>

          {/* Success / Error Messages */}
          {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
        </form>
      </div>
    </motion.section>
  );
}
