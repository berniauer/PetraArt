import React, { useEffect } from 'react';

const DatenschutzPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="datenschutz" className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-light mb-6">Datenschutzerklärung</h1>

      <div className="prose max-w-none text-gray-700">
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          <strong>Petra Fimberger</strong>
          <br />
          Steinbreite 6
          <br />
          5112 Lamprechtshausen
          <br />
          Österreich
          <br />
          E-Mail: <a href="mailto:info@petra-art.at" className="text-gold hover:underline">info@petra-art.at</a>
        </p>
        <p>Tel.: <a href="tel:+436645365772" className="text-gold hover:underline">+43 664 5365772</a></p>

        <h2>2. Allgemeines</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten
          ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG, TKG 2003). In dieser
          Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im
          Rahmen dieser Website.
        </p>

        <h2>3. Kontaktaufnahme</h2>
        <p>
          Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre
          angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. lit. b DSGVO (Vertragserfüllung).
        </p>

        <h2>4. Server-Logs</h2>
        <p>
          Der Webserver speichert automatisch Daten wie:
        </p>
        <ul>
          <li>die aufgerufene Seite (URL)</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
          <li>Referrer URL</li>
          <li>IP-Adresse und Uhrzeit des Zugriffs</li>
        </ul>
        <p>
          Diese Daten werden aus Sicherheitsgründen (z. B. zur Aufklärung von Missbrauchsfällen) für maximal 2
          Wochen gespeichert und anschließend automatisch gelöscht. Eine Zusammenführung dieser Daten mit anderen
          Datenquellen erfolgt nicht.
        </p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).</p>

        <h2>5. Cookies</h2>
        <p>
          Diese Website verwendet keine Cookies von Drittanbietern. Es werden nur technisch notwendige Cookies
          eingesetzt, die für die Funktion der Seite erforderlich sind.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Ihnen stehen laut DSGVO folgende Rechte zu: Auskunft über Ihre gespeicherten Daten, Berichtigung oder
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerruf einer Einwilligung,
          Widerspruch gegen die Verarbeitung.
        </p>
        <p>
          Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie
          sich bei der österreichischen Datenschutzbehörde beschweren: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-gold">www.dsb.gv.at</a>
        </p>

        <h2>7. SSL-/TLS-Verschlüsselung</h2>
        <p>
          Diese Website nutzt HTTPS, um Daten sicher über das Internet zu übertragen. Sie erkennen dies am
          Schloss-Symbol in der Browserzeile.
        </p>
      </div>
    </section>
  );
};

export default DatenschutzPage;
