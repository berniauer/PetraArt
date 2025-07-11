import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-2xl font-light">Petra Fimberger</span>
            <span className="text-gold ml-2">Abstrakte Kunst</span>
          </div>
          <p className="text-gray-400 mb-6">
            Kunst, die berührt. Werke, die bewegen. Emotionen, die bleiben.
          </p>
          <div className="section-divider bg-gold mb-6"></div>
          <p className="text-sm text-gray-500">
            © 2025 Petra Fimberger. Alle Kunstwerke sind urheberrechtlich geschützt.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;