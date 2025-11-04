import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
  <footer className="bg-gray-50 text-gray-900 pt-0 pb-12">
      {/* small centered gold divider at the very top edge */}
      <div aria-hidden className="w-full">
        <div className="section-divider" />
      </div>
      <div className="container mx-auto px-6 pt-6">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-light">Petra Fimberger</span>
          </div>
          {/* social icons (placeholders for links) */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
          </div>
          <p className="text-gray-600 mb-6">
            Kunst, die berührt. Werke, die bewegen. Emotionen, die bleiben.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm text-gray-500">© 2025 Petra Fimberger. Alle Kunstwerke sind urheberrechtlich geschützt.</p>
            <nav className="flex space-x-4">
              <Link to="/agbs" className="text-sm text-gray-400 hover:text-white underline-offset-2 hover:underline">
                AGBs
              </Link>
              <Link to="/impressum" className="text-sm text-gray-400 hover:text-white underline-offset-2 hover:underline">
                Impressum
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;