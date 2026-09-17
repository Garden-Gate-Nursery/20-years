import type { CityPage, CitySlug } from '../types/cities';

export const cities: CityPage[] = [
	{
		slug: 'pasco-wa',
		name: 'Pasco',
		title: 'Pasco Nursery | Shade & Ornamental Trees | Garden Gate',
		description:
			'Garden Gate is a Pasco nursery growing container shade and ornamental trees for Tri-Cities homeowners. Shop online or visit our plant nursery in Pasco, WA.',
		h1: 'Pasco plant nursery for shade and ornamental trees',
		lead: 'Looking for a plant nursery in Pasco? Garden Gate Nursery grows landscape-ready container trees right here on Sagemoor Road for local homeowners across the Columbia Basin.',
		paragraphs: [
			'Whether you are finishing a new build near Road 68, refreshing a mature yard in west Pasco, or adding shade along a busy street, this Pasco nursery grows trees chosen for Eastern Washington heat, wind, and alkaline soils.',
			'Our specialty is high-quality shade trees for lasting canopy and ornamental varieties for flowers, form, and fall color—maples, lindens, redbuds, crabapples, and more—grown in containers so they are easier to plant than traditional ball-and-burlap stock.',
			'Visit the nursery by appointment, shop online for trees ready for Pasco landscapes, or ask about open-to-the-public events when we open the farm to homeowners.',
		],
		plantingNote:
			'In Pasco, spring and fall are the best planting windows. Cooler weather helps large container trees establish before summer heat. We recommend waiting through the hottest stretch of summer before planting again.',
	},
	{
		slug: 'kennewick-wa',
		name: 'Kennewick',
		title: 'Kennewick Nursery | Trees Near You | Garden Gate',
		description:
			'Looking for a plant nursery near Kennewick? Garden Gate Nursery in nearby Pasco grows shade and ornamental trees for Kennewick homeowners. Shop or schedule a visit.',
		h1: 'Kennewick plant nursery trees for your yard',
		lead: 'Kennewick homeowners looking for a plant nursery near them shop Garden Gate for large, container-grown shade and ornamental trees grown just across the river in Pasco.',
		paragraphs: [
			'From Southridge and Canyon Lakes to established neighborhoods near downtown, Kennewick yards benefit from a nursery that selects trees for Tri-Cities heat and still delivers real shade and curb appeal.',
			'We grow high-quality shade trees for canopy and cooling, plus ornamental trees for spring bloom and seasonal color. Most trees leave our farm in containers with a bark mix, so they are lighter and plantable in the sizes homeowners want.',
			'Order online for pickup, schedule a nursery visit, or reach out when you want help matching a tree to your Kennewick yard.',
		],
		plantingNote:
			'Kennewick planting goes best in spring and fall. Large container trees establish more reliably in cooler weather; hold off during peak summer heat when transplant shock is hardest on new trees.',
	},
	{
		slug: 'richland-wa',
		name: 'Richland',
		title: 'Richland Nursery | Shade & Ornamental Trees | Garden Gate',
		description:
			'Garden Gate is the Tri-Cities plant nursery serving Richland homeowners with container-grown shade and ornamental trees from our Pasco farm. Shop online or visit.',
		h1: 'Richland plant nursery for landscape-ready trees',
		lead: 'Richland homeowners come to Garden Gate—a Pasco plant nursery serving Richland—for premium shade and ornamental trees sized for finished-looking Tri-Cities landscapes.',
		paragraphs: [
			'Richland’s mix of newer developments and established neighborhoods needs a nursery that supplies trees looking good the day they are planted and keep performing through hot summers and cold winters.',
			'We focus on high-quality shade trees for lasting canopy and ornamentals for structure and seasonal interest. Every tree spends years in our care before it reaches your yard.',
			'Shop the online store, contact us to plan a visit to the Pasco farm, or ask about seasonal open events when homeowners can walk the rows.',
		],
		plantingNote:
			'For Richland yards, plant in spring or fall when temperatures ease. Our container-grown trees are ready for those windows; midsummer planting is tougher on large trees in the Columbia Basin.',
	},
	{
		slug: 'west-richland-wa',
		name: 'West Richland',
		title: 'West Richland Nursery | Trees Near You | Garden Gate',
		description:
			'Looking for a plant nursery near West Richland? Garden Gate Nursery in Pasco grows shade and ornamental trees for West Richland homeowners. Shop or schedule a visit.',
		h1: 'West Richland plant nursery trees for open yards',
		lead: 'West Richland homeowners choose Garden Gate—a nearby Pasco plant nursery—for container-grown shade and ornamental trees built for Columbia Basin lots and landscapes.',
		paragraphs: [
			'West Richland’s growing neighborhoods and larger lots are a natural fit for a tree nursery that supplies shade trees with real canopy and ornamentals that stand out along driveways and front yards.',
			'We grow landscape-ready sizes in containers so you can plant larger trees without the weight of traditional ball-and-burlap. Expect varieties suited to local soils, wind, and summer heat.',
			'Browse trees online, message us about appointments at the farm, or stop by during open-to-the-public events when available.',
		],
		plantingNote:
			'West Richland planting works best in spring and fall. Give large container trees cooler weather to root in before the heat of summer returns.',
	},
];

export function getCity(slug: CitySlug): CityPage {
	const city = cities.find((entry) => entry.slug === slug);
	if (!city) {
		throw new Error(`Unknown city slug: ${slug}`);
	}
	return city;
}

export function getOtherCities(slug: CitySlug): CityPage[] {
	return cities.filter((entry) => entry.slug !== slug);
}
