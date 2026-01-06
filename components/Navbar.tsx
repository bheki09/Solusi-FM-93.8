import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Radio } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-rose-950 text-white sticky top-0 z-50 shadow-lg border-b border-rose-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Area */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-rose-800 rounded-full group-hover:bg-rose-700 transition-colors border border-rose-700">
                <Radio className="h-6 w-6 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-white">Solusi FM</span>
                <span className="text-xs text-rose-200 font-medium tracking-widest">93.8 MHZ</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-amber-400'
                    : 'text-rose-100 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-rose-950 px-4 py-2 rounded-full font-bold text-sm transition-transform transform hover:scale-105 shadow-md shadow-black/20"
            >
              Request Song
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-rose-200 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-rose-900 border-t border-rose-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-rose-950 text-amber-400'
                    : 'text-rose-100 hover:bg-rose-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;