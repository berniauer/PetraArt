// Minimal artworks dataset used by the Gallery and Lightbox components.
// Each artwork should have at least:
// - id: unique identifier
// - title: display title
// - images: array of image paths (relative to BASE_URL, starting with '/art/...')
// - details: { dimensions, technique, year }
// - emotionalDescription: string shown in the Lightbox

const artworks = [
	{
		id: '1',
		title: 'Einigschaut',
		images: [
			'/art/Gallery/1 einigschaut.webp',
			'/art/Gallery/1 einigschaut detail.webp',
			'/art/Gallery/1 einigschaut raum.webp'
		],
		details: {
			dimensions: '80 x 60 cm',
			technique: 'Acryl auf Leinwand',
			year: '2022'
		},
		emotionalDescription: 'Ein nachdenkliches, ruhiges Stück mit subtilen Farbschichten.'
	},
	{
		id: '2',
		title: 'Fabelhaft',
		images: [
			'/art/Gallery/2 fabelhaft.webp',
			'/art/Gallery/2 fabelhaft detail.webp',
			'/art/Gallery/2 fabelhaft raum.webp'
		],
		details: {
			dimensions: '70 x 50 cm',
			technique: 'Mixed Media',
			year: '2021'
		},
		emotionalDescription: 'Verspielt und erzählerisch: Formen und Texturen führen in eine kleine Fantasiewelt.'
	},
	{
		id: '3',
		title: 'Locker',
		images: [
			'/art/Gallery/3 locker.webp',
			'/art/Gallery/3 locker detail.webp',
			'/art/Gallery/3 locker raum.webp'
		],
		details: {
			dimensions: '60 x 80 cm',
			technique: 'Acryl',
			year: '2020'
		},
		emotionalDescription: 'Leichtigkeit und Bewegung, die den Betrachter einlädt, zu verweilen.'
	},
	{
		id: '4',
		title: 'Bitte lächeln',
		images: [
			'/art/Gallery/4 bitte laecheln.webp',
			'/art/Gallery/4 bitte laecheln detail.webp',
			'/art/Gallery/4 bitte laecheln raum.webp'
		],
		details: {
			dimensions: '90 x 70 cm',
			technique: 'Acryl auf Leinwand',
			year: '2019'
		},
		emotionalDescription: 'Ironisch-fröhlich: ein Spiel mit Erwartung und Ausdruck.'
	},
	{
		id: '5',
		title: 'Hopefully',
		images: [
			'/art/Gallery/5 hopefully.webp',
			'/art/Gallery/5 hopefully detail.webp',
			'/art/Gallery/5 hopefully raum.webp'
		],
		details: {
			dimensions: '75 x 55 cm',
			technique: 'Acryl',
			year: '2023'
		},
		emotionalDescription: 'Ein hoffnungsvoller Blick in helle Farbräume.'
	},
	{
		id: '6',
		title: 'Sonate en la',
		images: [
			'/art/Gallery/6 sonate en la.webp',
			'/art/Gallery/6 sonate en la detail.webp',
			'/art/Gallery/6 sonate en la raum.webp'
		],
		details: {
			dimensions: '100 x 80 cm',
			technique: 'Acryl & Collage',
			year: '2018'
		},
		emotionalDescription: 'Musikalische Strukturen, übersetzt in Farben und Schichten.'
	},
	{
		id: '7',
		title: 'Der Kuh',
		images: [
			'/art/Gallery/7 der kuh.webp',
			'/art/Gallery/7 der kuh detail.webp',
			'/art/Gallery/7 der kuh raum.webp'
		],
		details: {
			dimensions: '60 x 60 cm',
			technique: 'Acryl',
			year: '2017'
		},
		emotionalDescription: 'Witzig und direkt — ein Augenzwinkern in Farbe.'
	},
	{
		id: '8',
		title: 'Offline',
		images: [
			'/art/Gallery/8 offline.webp',
			'/art/Gallery/8 offline detail.webp',
			'/art/Gallery/8 offline raum.webp'
		],
		details: {
			dimensions: '85 x 65 cm',
			technique: 'Acryl',
			year: '2020'
		},
		emotionalDescription: 'Ruhig, reduziert — ein Gegenpol zur digitalen Überflutung.'
	},
	{
		id: '9',
		title: 'Spaziergang ins Ich',
		images: [
			'/art/Gallery/9 spaziergang ins ich.webp',
			'/art/Gallery/9 spaziergang ins ich detail.webp',
			'/art/Gallery/9 spaziergang ins ich raum.webp'
		],
		details: {
			dimensions: '95 x 75 cm',
			technique: 'Acryl auf Leinwand',
			year: '2021'
		},
		emotionalDescription: 'Eine introspektive Reise in Farbräumen.'
	}
];

export default artworks;

