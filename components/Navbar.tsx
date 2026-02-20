import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'features' | 'pricing' | 'about' | 'resources' | 'faq' | 'contact') => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'About Us', id: 'about' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id as any);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <img
            src="/images/MYSPA.png"
            alt="MySpa Logo"
            className="h-12 w-auto object-contain"
          />

          <span className="text-2xl font-bold text-[#111827] tracking-tight"></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-black uppercase tracking-widest text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => handleLinkClick(link.id, e)}
              className={`transition-colors relative group ${currentPage === link.id ? "text-[#207D40]" : "hover:text-[#207D40]"}`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#207D40] transition-all group-hover:w-full ${currentPage === link.id ? "w-full" : "w-0"}`}
              ></span>
            </a>
          ))}
        </div>

        {/* Buttons & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="bg-[#207D40] hover:bg-[#1a6333] text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-[#207D40]/20">
            Book Demo
          </button>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => handleLinkClick(link.id, e)}
              className="text-sm font-black uppercase tracking-widest text-gray-800 hover:text-[#207D40]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <button className="text-left font-black uppercase tracking-widest text-[#F7A300]">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
