"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo, { CompactLogo, FaviconLogo } from "./logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? "glass-card border-b border-white/10"
      : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              {/* Desktop Logo */}
              <div className="hidden lg:block cursor-pointer">
                <Logo size="default" />
              </div>
              {/* Mobile Logo */}
              <div className="lg:hidden cursor-pointer">
                <CompactLogo />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors font-generalsans">
              Home
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors font-generalsans">
              About
            </Link>
            <Link href="/services" className="text-white/80 hover:text-white transition-colors font-generalsans">
              Services
            </Link>
            <Link href="/work" className="text-white/80 hover:text-white transition-colors font-generalsans">
              Work
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors font-generalsans">
              Contact
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white font-generalsans"
              >
                Let's Talk
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden glass-card mt-4 p-6 rounded-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors font-generalsans"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-colors font-generalsans"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white/80 hover:text-white transition-colors font-generalsans"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/work"
                className="text-white/80 hover:text-white transition-colors font-generalsans"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition-colors font-generalsans"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white font-generalsans w-full"
                >
                  Let's Talk
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
