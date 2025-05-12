import { MessageCircle, Mail, Instagram, Facebook, Twitter, FacebookIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WasiFlow</h3>
            <p className="text-gray-300 mb-4">
              Smart automation tool connecting WhatsApp Business API with Google Sheets for small businesses.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Request Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MessageCircle size={20} className="mr-2 text-green-400" />
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-green-400" />
                <a href="mailto:info@wasiflow.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@wasiflow.com
                </a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Twitter size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WasiFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
