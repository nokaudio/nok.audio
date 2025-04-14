import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We're dedicated to creating exceptional digital experiences through innovative web development solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://x.com/nokaudio" className="text-gray-400 hover:text-accent">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}