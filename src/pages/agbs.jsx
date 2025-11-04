import React, { useEffect } from 'react';

const AgbsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section id="agbs" className="container mx-auto px-6 py-20">
			<h1 className="text-4xl font-light mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>

			<div className="prose max-w-none text-gray-700">
				<h2>Geltungsbereich</h2>
				<p>Diese AGB gelten für sämtliche Vertragsbeziehungen zwischen der Anbieterin und ihren Kunden.</p>

				<h2>Vertragsabschluss</h2>
				<p>Mit der Bestellung des Kunden kommt ein Vertrag zustande. Die Annahme erfolgt durch eine Bestätigung per E-Mail oder durch Auslieferung der Ware.</p>

				<h2>Preise und Zahlung</h2>
				<p>Es gelten die zum Zeitpunkt der Bestellung angegebenen Preise. Zahlungen sind per Überweisung oder per Kontaktaufnahme zu vereinbaren.</p>

				<h2>Haftung</h2>
				<p>Die Haftung beschränkt sich auf Vorsatz und grobe Fahrlässigkeit, soweit gesetzlich zulässig.</p>
			</div>
		</section>
	);
};

export default AgbsPage;
