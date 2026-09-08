import type { ImageMetadata } from 'astro';

export type GalleryItem = {
	src: ImageMetadata;
	alt: string;
	caption?: string;
	/** CSS object-position when cropped (e.g. "top") */
	objectPosition?: string;
};
