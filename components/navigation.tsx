"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/courses" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Faculty", href: "/faculty" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#6fbf73]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6fbf73] to-[#4b2e83] rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#6fbf73]/20 transition-all">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white">NEO</h1>
              <p className="text-xs text-gray-400">Institute of Applied Art</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#6fbf73] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6fbf73] to-[#4b2e83] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              className="hidden sm:inline-flex bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-semibold"
              size="sm"
            >
              Apply Now
            </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white transition">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-[#6fbf73]/10 py-4 space-y-3 bg-black/50 backdrop-blur">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#6fbf73] hover:bg-[#6fbf73]/10 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-semibold">Apply Now</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
