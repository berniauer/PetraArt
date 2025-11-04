import React, { useEffect } from 'react';

const ImpressumPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section id="impressum" className="container mx-auto px-6 py-20">
			<h1 className="text-4xl font-light mb-6">Impressum</h1>

			<div className="prose max-w-none text-gray-700">
				<div className="space-y-4">
					<p className="text-lg font-medium">Petra Fimberger</p>
					<p className="text-sm text-gray-600">Künstlerin — Malerei, Skizzen, Mixed Media, Skulpturen und Kunstobjekte</p>
					<address className="not-italic">
						<p>Steinbreite 6</p>
						<p>5112 Lamprechtshausen</p>
						<p>AUSTRIA</p>
					</address>
					<div>
						<p className="font-medium">Kontakt</p>
						<p>Tel.: <a href="tel:+436645365772" className="text-gold hover:underline">+43 664 5365772</a></p>
						<p>E-Mail: <a href="mailto:info@petra-art.at" className="text-gold hover:underline">info@petra-art.at</a></p>
					</div>
					<hr />
					<h2>Haftungsausschluss</h2>
					<p>
						Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Aktualität,
						Vollständigkeit und Richtigkeit der Inhalte kann jedoch keine Gewähr übernommen werden.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ImpressumPage;
