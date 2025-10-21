import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="section-divider-long" aria-hidden="true"></div>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-2xl font-light">Petra Fimberger</span>
            <span className="text-gold ml-2">Abstrakte Kunst</span>
          </div>
          <p className="text-gray-400 mb-6">
            Kunst, die berührt. Werke, die bewegen. Emotionen, die bleiben.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            © 2025 Petra Fimberger. Alle Kunstwerke sind urheberrechtlich geschützt.
          </p>
          <div className="mt-4">
            <a href="/impressum" className="text-sm text-gray-400 hover:text-white mr-4">Impressum</a>
            <a href="/agbs" className="text-sm text-gray-400 hover:text-white">AGBs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;