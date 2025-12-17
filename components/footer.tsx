import Link from "next/link"
import { Facebook, Mail, MessageCircle, Globe, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Lawyer's Premier League BD</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Where the legal fraternity meets the spirit of cricket. Building community through sportsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="hover:underline transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/teams/management" className="hover:underline transition-colors">
                  Management
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/teams/advisory" className="hover:underline transition-colors">
                  Advisory Panel
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="hover:underline transition-colors">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/rules" className="hover:underline transition-colors">
                  Rules & Guidelines
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/lawyerspremierleaguebd"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@lawyerspremierleaguebd"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Youtube className="w-4 h-4" />
                Youtube
              </a>
              <a
                href="mailto:lawyerspremierleaguelpl@gmail.com"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://wa.me/880130411555"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="http://lawyerspremierleaguebd.com"
                className="flex items-center gap-2 text-sm hover:underline transition-colors"
              >
                <Globe className="w-4 h-4" />
                Website
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © {currentYear} Lawyer's Premier League BD. All rights reserved. | Celebrating the legal community through
            cricket.
          </p>
        </div>
      </div>
    </footer>
  )
}
