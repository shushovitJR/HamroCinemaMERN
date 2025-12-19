import { assets } from "../assets/assets"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/50 to-black border-t border-gray-800">
      {/* Main footer content */}
      <div className="container-fluid section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand section */}
          <div className="space-y-6">
            <img alt="Hamro Cinema Logo" className="h-12 w-auto" src={assets.MainLogo} />
            <p className="text-sm text-gray-400 leading-relaxed">
              Hamro Cinema has been the industry's standard cinema watching experience, granting entertainment services with excellence since 2025.
            </p>
            <div className="flex items-center gap-3">
              <img src={assets.googleplayic} alt="Google Play" className="h-10 w-auto hover:opacity-80 transition cursor-pointer" />
              <img src={assets.appstoreic} alt="App Store" className="h-10 w-auto hover:opacity-80 transition cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-red-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Movies</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Bookings</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <p>+977-9862912069</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <p>hamrocinema@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} Hamro Cinema. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer