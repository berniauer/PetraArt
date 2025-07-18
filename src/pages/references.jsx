// app/werdegang/page.jsx
import React, { useEffect } from 'react';
import WerdegangSection from '@/components/sections/WerdegangSection';
import ExhibitionsSection from '@/components/sections/ExhibitionsSection';

const ReferencesPage = () => {
  // Automatisch nach oben scrollen beim Laden der Seite
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <WerdegangSection />
      <ExhibitionsSection />
    </>
  );
};

export default ReferencesPage;
