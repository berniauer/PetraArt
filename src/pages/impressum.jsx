import React from 'react';

const Impressum = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl font-light mb-6">Impressum</h1>
        <p className="text-gray-700 mb-4">Angaben gemäß § 5 TMG:</p>
        <p className="text-gray-700">Petra Fimberger<br/>Musterstraße 1<br/>1010 Wien<br/>Österreich</p>

        <h2 className="text-xl font-medium mt-8 mb-3">Kontakt</h2>
        <p className="text-gray-700">E-Mail: info@petra-art.at<br/>Telefon: +43 660 000000</p>

        <h2 className="text-xl font-medium mt-8 mb-3">Verantwortlich für den Inhalt</h2>
        <p className="text-gray-700">Petra Fimberger</p>

        <h2 className="text-xl font-medium mt-8 mb-3">Haftungsausschluss</h2>
        <p className="text-gray-700">Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
      </div>
    </section>
  );
};

export default Impressum;
