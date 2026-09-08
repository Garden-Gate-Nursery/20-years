import type { GalleryItem } from '../types/gallery';
import oregon1 from '../assets/story/2014-oregon-1.jpg';
import oregon2 from '../assets/story/2014-oregon-2.jpg';
import oregon3 from '../assets/story/2014-oregon-3.jpg';

export const story2014Photos: GalleryItem[] = [
	{
		src: oregon1,
		alt: 'Rows of young conifer trees in dark soil at the Boring, Oregon nursery',
		caption: 'Conifers in Boring, Oregon',
	},
	{
		src: oregon2,
		alt: 'Long rows of green and blue spruce evergreens under a clear sky in Oregon',
		caption: 'Evergreen rows in the valley',
	},
	{
		src: oregon3,
		alt: 'Nursery worker among potted blue-green conifers at the Oregon growing location',
		caption: 'Growing evergreens in Oregon',
	},
];

/** Wide conifer field — strongest Oregon growing-location signal */
export const story2014Featured = story2014Photos[0];
