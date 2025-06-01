import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Beastmode WAR-HOUSE GYM</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your premier fitness destination in Demopolis, AL. Where strength meets determination and
              transformation becomes reality.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-red-400 mr-3" />
                <span className="text-gray-300">Demopolis, AL</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-3" />
                <a href="tel:+13343277720" className="text-gray-300 hover:text-white transition-colors">
                  (334) 327-7720
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-red-400 mr-3" />
                <span className="text-gray-300">Flexible Hours | Contact for Schedule</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Strength Training</span>
              </li>
              <li>
                <span className="text-gray-300">Personal Training</span>
              </li>
              <li>
                <span className="text-gray-300">Group Classes</span>
              </li>
              <li>
                <span className="text-gray-300">Competition Prep</span>
              </li>
              <li>
                <span className="text-gray-300">Nutrition Planning</span>
              </li>
              <li>
                <span className="text-gray-300">Fitness Assessment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-red-400" />
              <span className="text-gray-300">Stay updated with our latest offers</span>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Beastmode WAR-HOUSE GYM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
