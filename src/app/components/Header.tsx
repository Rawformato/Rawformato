import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoWhite from 'figma:asset/7e4c761982cfd33b40265ce2d3e2d199b4993d4b.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Automotive & Sports', path: '/automotive-sports' },
    { name: 'Restaurants', path: '/restaurants' },
    { name: 'Realtors & Builders', path: '/realtors-builders' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B0E]/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <img 
              src={logoWhite} 
              alt="RAW Formato" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="absolute -inset-2 bg-[#8B5CF6]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#8B5CF6]'
                    : 'text-[#F2F2F2]/70 hover:text-[#F2F2F2]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#8B5CF6]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#8B5CF6] text-[#F2F2F2] rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              <span className="relative z-10">Book a Strategy Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F2F2F2] p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#8B5CF6]'
                      : 'text-[#F2F2F2]/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                className="mt-4 text-center px-6 py-2.5 bg-[#8B5CF6] text-[#F2F2F2] rounded-full"
              >
                Book a Strategy Call
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}