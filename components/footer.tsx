import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#6fbf73]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">NEO</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Institute of Applied Art. Shaping creative futures through excellence in design, art, and advertising
              education.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-[#6fbf73]/10 hover:bg-[#6fbf73]/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#6fbf73] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Programs</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Applied Art", href: "#" },
                { label: "UI/UX Design", href: "#" },
                { label: "Graphic Design", href: "#" },
                { label: "Photography", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#6fbf73] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Faculty", href: "/faculty" },
                { label: "Admissions", href: "/admissions" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#6fbf73] transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 text-[#6fbf73] mt-0.5" />
                <p>A/5, Mai Mauli Apartment, Manpada Rd, Dombivli-East</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 text-[#6fbf73]" />
                <p>+91 9970352380</p>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 text-[#6fbf73]" />
                <p>info@neoinstitute.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6fbf73]/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 NEO Institute of Applied Art. All rights reserved. Crafted with creativity.</p>
        </div>
      </div>
    </footer>
  )
}
