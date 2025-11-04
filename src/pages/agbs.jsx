import React, { useEffect } from 'react';

const AgbsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section id="agbs" className="container mx-auto px-6 py-20">
			<h1 className="text-4xl font-light mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>
			<div className="prose max-w-none text-gray-700">
				<h2>1. Geltungsbereich</h2>
				<p>
					Diese Allgemeinen Geschäftsbedingungen gelten für alle Angebote, Aufträge und Lieferungen von
					<strong>Petra Fimberger</strong>,
					<address className="not-italic">Steinbreite 6, 5112 Lamprechtshausen, Österreich</address>, sofern keine abweichenden Vereinbarungen schriftlich getroffen werden.
					Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
				</p>

				<h2>2. Vertragsabschluss</h2>
				<p>
					Angebote sind freibleibend. Ein Vertrag kommt erst durch schriftliche Bestätigung zustande. Geringfügige Abweichungen in Farbe, Form oder Material bei künstlerischen Arbeiten sind möglich und stellen keinen Mangel dar.
				</p>

				<h2>3. Preise und Zahlung</h2>
				<p>
					Alle Preise sind in Euro angegeben. Als Kleinunternehmerin gemäß § 6 Abs. 1 Z 27 UStG wird keine Umsatzsteuer berechnet.
					Der Rechnungsbetrag ist innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zu begleichen.
				</p>

				<h2>4. Eigentumsvorbehalt</h2>
				<p>
					Bis zur vollständigen Bezahlung bleibt das gelieferte Werk Eigentum der Künstlerin.
				</p>

				<h2>5. Lieferung und Versand</h2>
				<p>
					Die Lieferung erfolgt auf Gefahr und Kosten der Käuferin/des Käufers. Lieferfristen gelten nur als Richtwerte.
				</p>

				<h2>6. Urheberrecht</h2>
				<p>
					Sämtliche Werke unterliegen dem Urheberrecht. Ohne ausdrückliche schriftliche Zustimmung ist eine Vervielfältigung oder Nutzung nicht gestattet.
				</p>

				<h2>7. Widerrufsrecht</h2>
				<p>
					Verbraucher*innen haben gemäß § 11 FAGG das Recht, binnen 14 Tagen ohne Angabe von Gründen vom Vertrag zurückzutreten.
					Vom Widerruf ausgenommen sind gemäß § 18 Abs. 1 Z 3 FAGG Werke, die nach Kundenspezifikation angefertigt oder eindeutig auf persönliche Bedürfnisse zugeschnitten sind.
				</p>

				<h2>8. Haftung</h2>
				<p>
					Für Schäden wird nur bei Vorsatz oder grober Fahrlässigkeit gehaftet. Eine Haftung für technische Störungen oder Ausfälle der Website ist ausgeschlossen.
				</p>

				<h2>9. Datenschutz</h2>
				<p>
					Der Schutz Ihrer persönlichen Daten ist uns wichtig. Informationen zur Datenverarbeitung finden Sie in unserer Datenschutzerklärung.
				</p>

				<h2>10. Gerichtsstand</h2>
				<p>
					Für Unternehmergeschäfte gilt der Gerichtsstand Salzburg. Für Verbraucher*innen gelten die gesetzlichen Gerichtsstände.
					Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU unter
					<a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-gold">http://ec.europa.eu/odr</a>
					zu richten.
				</p>
			</div>
		</section>
	);
};

export default AgbsPage;
