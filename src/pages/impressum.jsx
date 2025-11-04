import React, { useEffect } from 'react';

const ImpressumPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section id="impressum" className="container mx-auto px-6 py-20">
			<h1 className="text-4xl font-light mb-6">Impressum</h1>

			<div className="prose max-w-none text-gray-700">
				<p>Petra Fimberger</p>
				<p>Beispielstraße 1</p>
				<p>12345 Musterstadt</p>

				<h2>Kontakt</h2>
				<p>Email: <a href="mailto:info@example.com">info@example.com</a></p>

				<h2>Haftungsausschluss</h2>
				<p>
					Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Aktualität,
					Vollständigkeit und Richtigkeit der Inhalte kann jedoch keine Gewähr übernommen werden.
				</p>
			</div>
		</section>
	);
};

export default ImpressumPage;
