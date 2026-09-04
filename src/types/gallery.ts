import type { ImageMetadata } from 'astro';

export type GalleryItem = {
	src: ImageMetadata;
	alt: string;
	caption?: string;
};
