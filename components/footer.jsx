import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Logo from "./logo"

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/xylotek",
    color: "hover:text-gray-400"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/xylotek",
    color: "hover:text-blue-400"
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com/xylotek",
    color: "hover:text-blue-400"
  },
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:hello@xylotek.com",
    color: "hover:text-red-400"
  }
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" }
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo size="favicon" />
            </div>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">
              Crafting next-generation user experiences through innovative design and cutting-edge technology. 
              Let's build something extraordinary together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white/60 ${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-generalsans">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 font-generalsans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-generalsans">
              Contact
            </h4>
            <div className="space-y-2 text-white/60 font-generalsans">
              <p>hello@xylotek.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Remote Worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm font-generalsans">
              © 2025 Xylotek. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors font-generalsans">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors font-generalsans">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
