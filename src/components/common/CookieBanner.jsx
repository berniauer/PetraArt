import React, { useState, useEffect } from 'react';

const COOKIE_NAME = 'petra_cookie_consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    try {
      const val = localStorage.getItem(COOKIE_NAME);
      if (!val) setVisible(true);
      else setAccepted(val === 'true');
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_NAME, 'true');
    setAccepted(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_NAME, 'false');
    setAccepted(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-6 z-50">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <h4 className="font-medium">Cookie-Einstellungen</h4>
          <p className="text-sm text-gray-600">Wir verwenden keine externen Fonts oder Tracker ohne Zustimmung. Um den Datenfluss zu Google Fonts zu verhindern, wurde die Schrift lokal hinterlegt. Weitere Informationen in unserem Impressum und den AGBs.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={decline} className="px-4 py-2 rounded-md border border-gray-300 text-sm">Ablehnen</button>
          <button onClick={acceptAll} className="px-4 py-2 rounded-md bg-gold text-white text-sm">Alle akzeptieren</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
