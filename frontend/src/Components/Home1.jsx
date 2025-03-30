"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  const [text, setText] = useState("")
  const words = ["Backend Developer", "Full-Stack Engineer", "Problem Solver"]
  let index = 0,
    charIndex = 0

  useEffect(() => {
    AOS.init()
    const typingEffect = setInterval(() => {
      if (charIndex < words[index].length) {
        setText((prev) => prev + words[index][charIndex])
        charIndex++
      } else {
        setTimeout(() => {
          setText("")
          charIndex = 0
          index = (index + 1) % words.length
        }, 1500)
      }
    }, 150)
    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold" data-aos="fade-up">
        Hi, I'm Pradeep Gaur
      </h1>
      <h2 className="text-3xl font-semibold mt-4 h-10">{text}|</h2>
      <p className="mt-4 text-lg max-w-xl" data-aos="fade-up" data-aos-delay="200">
        Passionate about building scalable, secure, and high-performance applications.
      </p>
      <div className="mt-6 space-x-4">
        <a href="/projects" className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition">
          View My Work
        </a>
        <a
          href="/contact"
          className="bg-transparent border-2 border-white py-2 px-4 rounded-lg hover:bg-white hover:text-blue-600 transition"
        >
          Hire Me
        </a>
      </div>
    </section>
  )
}

