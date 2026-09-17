import { googleMapsUrl } from './reviews';
import {
	SITE_ADDRESS,
	SITE_NAME,
	SITE_ORIGIN,
	SITE_PHONE,
} from '../constants/site';

const areaServedCities = [
	{ '@type': 'City', name: 'Pasco, WA' },
	{ '@type': 'City', name: 'Kennewick, WA' },
	{ '@type': 'City', name: 'Richland, WA' },
	{ '@type': 'City', name: 'West Richland, WA' },
] as const;

export function buildLocalBusinessJsonLd(options?: { pageUrl?: string; primaryCity?: string }) {
	const areaServed = options?.primaryCity
		? [
				{ '@type': 'City', name: `${options.primaryCity}, WA` },
				...areaServedCities.filter((city) => city.name !== `${options.primaryCity}, WA`),
			]
		: [...areaServedCities];

	return {
		'@context': 'https://schema.org',
		'@type': ['Nursery', 'LocalBusiness'],
		name: SITE_NAME,
		description:
			'Plant nursery in Pasco, Washington growing container shade and ornamental trees for Tri-Cities homeowners.',
		telephone: SITE_PHONE,
		url: options?.pageUrl ?? SITE_ORIGIN,
		image: `${SITE_ORIGIN}/og-image.webp`,
		address: {
			'@type': 'PostalAddress',
			streetAddress: SITE_ADDRESS.street,
			addressLocality: SITE_ADDRESS.city,
			addressRegion: SITE_ADDRESS.state,
			postalCode: SITE_ADDRESS.zip,
			addressCountry: 'US',
		},
		areaServed,
		sameAs: [googleMapsUrl],
	};
}
