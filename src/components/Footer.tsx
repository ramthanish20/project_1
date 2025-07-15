
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Alex Johnson
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer & Designer</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              About
            </a>
            <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Services
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Divider */}
          <div className="w-full border-t border-gray-800"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Alex Johnson. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>All rights reserved.</span>
            </div>

            {/* Footer Links */}
            <div className="flex space-x-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-40"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
