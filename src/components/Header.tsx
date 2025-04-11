import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/g313.png" alt="Nok Audio Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-white">Nok Audio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-accent">Home</a>
            <a href="#" className="text-gray-300 hover:text-accent">Services</a>
            <a href="#" className="text-gray-300 hover:text-accent">About</a>
            <a href="#" className="text-gray-300 hover:text-accent">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-accent">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-accent">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-accent">About</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-accent">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}