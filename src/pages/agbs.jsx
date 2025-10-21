import React from 'react';

const Agb = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-light mb-6">Allgemeine Geschäftsbedingungen (AGBs)</h1>
        <p className="text-gray-700 mb-4">Geltungsbereich</p>
        <p className="text-gray-700">Diese AGB gelten für Bestellungen über die Website petra-art.at.</p>

        <h2 className="text-xl font-medium mt-6 mb-3">Vertragsabschluss</h2>
        <p className="text-gray-700">Mit der Bestellung gibt der Käufer ein verbindliches Angebot ab. Der Verkäufer kann dieses Angebot innerhalb von 7 Tagen annehmen.</p>

        <h2 className="text-xl font-medium mt-6 mb-3">Preise und Zahlung</h2>
        <p className="text-gray-700">Alle Preise sind Endpreise zzgl. Versandkosten, sofern nicht anders angegeben.</p>

        <h2 className="text-xl font-medium mt-6 mb-3">Widerrufsrecht</h2>
        <p className="text-gray-700">Verbraucher haben ein gesetzliches Widerrufsrecht. Details hierzu finden Sie in der Widerrufsbelehrung.</p>

        <h2 className="text-xl font-medium mt-6 mb-3">Gerichtsstand</h2>
        <p className="text-gray-700">Es gilt das Recht der Republik Österreich.</p>
      </div>
    </section>
  );
};

export default Agb;
