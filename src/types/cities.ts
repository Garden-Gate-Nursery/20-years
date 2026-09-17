export type CitySlug = 'pasco-wa' | 'kennewick-wa' | 'richland-wa' | 'west-richland-wa';

export interface CityPage {
	slug: CitySlug;
	name: string;
	title: string;
	description: string;
	h1: string;
	lead: string;
	paragraphs: string[];
	plantingNote: string;
}
