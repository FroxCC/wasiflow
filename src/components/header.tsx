"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-600 flex items-center">
              <span className="text-3xl mr-1">W</span>asiFlow
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              How It Works
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              Testimonials
            </a>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all">
              Try Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              How It Works
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              Testimonials
            </a>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all w-full">
              Try Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
