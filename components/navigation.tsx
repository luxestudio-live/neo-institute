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
    <>
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
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white transition z-50 relative">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black backdrop-blur-2xl overflow-hidden">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-8 pt-20 pb-20">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-4xl font-bold text-white hover:text-[#6fbf73] transition-all duration-300 hover:scale-110"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
                }}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="mt-8 bg-[#6fbf73] hover:bg-[#5aa85c] text-black font-semibold text-lg px-12 py-6"
              style={{
                animation: `fadeInUp 0.5s ease-out ${navItems.length * 0.1}s both`
              }}
            >
              Apply Now
            </Button>
          </div>
          
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </>
  )
}
