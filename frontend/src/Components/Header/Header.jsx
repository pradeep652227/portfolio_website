"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-lg" : "bg-gradient-to-r from-indigo-600 to-purple-600 bg-opacity-95"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-indigo-600" : "text-white"}`}>
          Pradeep Gaur
        </Link>
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          <Link
            to="/"
            className={`${isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white hover:text-indigo-100"} transition`}
          >
            Home
          </Link>
          <Link
            to="/experience"
            className={`${isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white hover:text-indigo-100"} transition`}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`${isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white hover:text-indigo-100"} transition`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`${isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-white hover:text-indigo-100"} transition`}
          >
            Contact
          </Link>
        </nav>
        <button
          className={`md:hidden ${isScrolled ? "text-indigo-600" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 text-center">
          <Link to="/" className="block text-gray-700 hover:text-indigo-600" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/experience"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

