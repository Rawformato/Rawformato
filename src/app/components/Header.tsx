import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoWhite from '@/assets/7e4c761982cfd33b40265ce2d3e2d199b4993d4b.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        rafId = 0;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
          ? 'bg-[#0B0B0E]/95 border-b border-white/10'
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
              width={120}
              height={40}
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="absolute -inset-2 bg-[#E5E5E5]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#E5E5E5]'
                    : 'text-[#F2F2F2]/70 hover:text-[#F2F2F2]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#E5E5E5]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#E5E5E5] text-[#0B0B0E] rounded-full overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10">Book a Strategy Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F2F2F2] p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
            className="lg:hidden border-t border-white/10 py-4 bg-[#0B0B0E]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm py-3 transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#E5E5E5]'
                      : 'text-[#F2F2F2]/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                className="mt-4 text-center px-6 py-2.5 bg-[#E5E5E5] text-[#0B0B0E] rounded-full hover:bg-white transition-colors"
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