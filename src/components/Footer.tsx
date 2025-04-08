import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Baseball Academy</h3>
            <p className="text-gray-400">
              Developing tomorrow's baseball stars through professional training and mentorship.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Baseball Ave, City, State
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@baseballacademy.com
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="/story" className="hover:text-white">Our Story</a></li>
              <li><a href="/donate" className="hover:text-white">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Baseball Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;