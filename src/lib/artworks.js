// Minimal artworks dataset used by the Gallery and Lightbox components.
// Each artwork should have at least:
// - id: unique identifier
// - title: display title
// - images: array of image paths (relative to BASE_URL, starting with '/art/...')
// - details: { dimensions, technique, year }
// - emotionalDescription: string shown in the Lightbox

const artworks = [
		{
		id: '2',
		title: 'fabelhaft',
		images: [
			'/art/Gallery/2 fabelhaft.webp',
			'/art/Gallery/2 fabelhaft detail.webp',
			'/art/Gallery/2 fabelhaft raum.webp'
		],
			details: {
				dimensions: '100 x 150 cm',
				technique: 'mixed media'
			}
	},
	{
		id: '1',
		title: 'einigschaut',
		images: [
			'/art/Gallery/1 einigschaut.webp',
			'/art/Gallery/1 einigschaut detail.webp',
			'/art/Gallery/1 einigschaut raum.webp'
		],
			details: {
				dimensions: '80 x 100 cm',
				technique: 'mixed media'
			}
	},

	{
		id: '3',
		title: 'locker',
		images: [
			'/art/Gallery/3 locker.webp',
			'/art/Gallery/3 locker detail.webp',
			'/art/Gallery/3 locker raum.webp'
		],
			details: {
				dimensions: '100 x 140 cm',
				technique: 'mixed media'
			}
	},
	{
		id: '4',
		title: 'bitte lächeln',
		images: [
			'/art/Gallery/4 bitte laecheln.webp',
			'/art/Gallery/4 bitte laecheln detail.webp',
			'/art/Gallery/4 bitte laecheln raum.webp'
		],
			details: {
				dimensions: '100 x 100 cm',
				technique: 'mixed media'
			}
	},
	{
		id: '5',
		title: 'hopefully',
		images: [
			'/art/Gallery/5 hopefully.webp',
			'/art/Gallery/5 hopefully detail.webp',
			'/art/Gallery/5 hopefully raum.webp'
		],
			details: {
				dimensions: '100 x 110 cm',
				technique: 'mixed media'
			}
	},
	{
		id: '6',
		title: 'sonate en la',
		images: [
			'/art/Gallery/6 sonate en la.webp',
			'/art/Gallery/6 sonate en la detail.webp',
			'/art/Gallery/6 sonate en la raum.webp'
		],
			details: {
				dimensions: '90 x 100 cm',
				technique: 'mixed media'
			}
	},
	{
		id: '7',
		title: 'der kuh',
		images: [
			'/art/Gallery/7 der kuh.webp',
			'/art/Gallery/7 der kuh detail.webp',
			'/art/Gallery/7 der kuh raum.webp'
		],
			details: {
				dimensions: '80 x 100 cm',
				technique: 'mixed media'
			}
	},
	{
		id: '8',
		title: 'offline',
		images: [
			'/art/Gallery/8 offline.webp',
			'/art/Gallery/8 offline detail.webp',
			'/art/Gallery/8 offline raum.webp'
		],
			details: {
				dimensions: '70 x 80 cm',
				technique: 'mixed media'
			}
	},
	{
		id: '9',
		title: 'spaziergang ins ich',
		images: [
			'/art/Gallery/9 spaziergang ins ich.webp',
			'/art/Gallery/9 spaziergang ins ich detail.webp',
			'/art/Gallery/9 spaziergang ins ich raum.webp'
		],
			details: {
				dimensions: '50 x 70 cm',
				technique: 'mixed media'
			}
	}
];

export default artworks;

