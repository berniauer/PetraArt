// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Links: drei Anchors und eine Route
  const navLinks = [
    { name: 'gallery', href: '#gallery' },
    { name: 'about', href: '#about' },
    { name: 'contact', href: '#contact' },
    { name: 'showing', href: '/references' },
  ];

  // Header-Hintergrund bei Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Bestimme aktive Section (nur auf Home)
      if (location.pathname === '/') {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        let foundActiveSection = '';
        
        // Durchlaufe alle Anchor-Links und finde die aktive Section
        for (let link of navLinks) {
          if (link.href.startsWith('#')) {
            const sectionId = link.href.substring(1);
            const section = document.querySelector(`#${sectionId}`);
            if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
              foundActiveSection = sectionId;
            }
          }
        }
        setActiveSection(foundActiveSection);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const headerVariants = {
    top:    { backgroundColor: 'rgba(255,255,255,0)', backdropFilter: 'blur(0)', boxShadow: 'none' },
    scrolled: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
    },
  };
  const mobileMenuVariants = { closed: { opacity: 0, y: '-20%' }, open: { opacity: 1, y: '0%' } };

  const onNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href.startsWith('#')) {
      // Smooth-Scroll auf Home
      if (location.pathname !== '/') navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Route wechseln
      navigate(href);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      variants={headerVariants}
      animate={scrolled ? 'scrolled' : 'top'}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Home */}
          <a href="/" onClick={scrollToTop} className="hover:opacity-80 transition-opacity">
            <img
              src={import.meta.env.BASE_URL + 'petra_transparent_stempel.png'}
              alt="Petra Fimberger"
              className="h-12 w-auto md:h-14 lg:h-16"
            />
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, href }) => {
              const isAnchor = href.startsWith('#');
              const isActiveRoute = !isAnchor && location.pathname === href;
              const isActiveSection = isAnchor && activeSection === href.substring(1);
              return (
                <a
                  key={name}
                  href={href}
                  onClick={(e) => onNavClick(e, href)}
                  className={`
                    relative stolzl-light uppercase tracking-wide transition-colors
                    ${isActiveRoute || isActiveSection
                      ? 'text-gold after:scale-x-100'
                      : 'text-gray-600 after:scale-x-0 hover:text-gold'}
                    after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                    after:w-full after:h-[2px] after:bg-gold after:transition-transform after:duration-300
                  `}
                >
                  {name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  onClick={(e) => onNavClick(e, href)}
                  className="text-lg stolzl-light uppercase tracking-wide hover:text-gold transition-colors"
                >
                  {name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
