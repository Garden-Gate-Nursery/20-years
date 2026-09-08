import type { GalleryItem } from '../types/gallery';
import open1 from '../assets/story/2011-open-1.jpg';
import open2 from '../assets/story/2011-open-2.jpg';
import open3 from '../assets/story/2011-open-3.jpg';
import open4 from '../assets/story/2011-open-4.jpg';
import open5 from '../assets/story/2011-open-5.jpg';
import open6 from '../assets/story/2011-open-6.jpg';
import open7 from '../assets/story/2011-open-7.jpg';
import open8 from '../assets/story/2011-open-8.jpg';
import open9 from '../assets/story/2011-open-9.jpg';
import open10 from '../assets/story/2011-open-10.jpg';
import open11 from '../assets/story/2011-open-11.jpg';
import open12 from '../assets/story/2011-open-12.jpg';
import open13 from '../assets/story/2011-open-13.jpg';
import open14 from '../assets/story/2011-open-14.jpg';
import open15 from '../assets/story/2011-open-15.jpg';

export const story2011Photos: GalleryItem[] = [
	{
		src: open1,
		alt: 'Forklift carrying a pallet of tall potted trees inside the nursery barn',
		caption: 'Moving large trees',
	},
	{
		src: open2,
		alt: 'Family and friends gathered at the back of a white utility truck',
		caption: 'Visitors at the gate',
	},
	{
		src: open3,
		alt: 'Three children smiling on a golf cart at the nursery',
		caption: 'Kids on the golf cart',
	},
	{
		src: open4,
		alt: 'Nursery worker in a Florida cap and canvas jacket among dormant trees',
		caption: 'Ready for open week',
		objectPosition: 'top',
	},
	{
		src: open5,
		alt: 'Two men adjusting a black ring around a young maple in the field',
		caption: 'Settling a tree',
		objectPosition: 'top',
	},
	{
		src: open6,
		alt: 'Children in a golf cart with an RV and nursery rows behind them',
		caption: 'Touring by golf cart',
	},
	{
		src: open7,
		alt: 'Three workers with a pile of bare-root saplings under the barn',
		caption: 'Bare-root prep',
	},
	{
		src: open8,
		alt: 'Two men sitting outdoors under a clear sky and green tree',
		caption: 'A break between rows',
	},
	{
		src: open9,
		alt: 'Woman and man talking near nursery stock while a boy climbs a golf cart',
		caption: 'Open day at the nursery',
	},
	{
		src: open10,
		alt: 'Boy with a red bicycle and a golf cart signed Open to Public at Garden Gate',
		caption: 'Open to the public today',
	},
	{
		src: open11,
		alt: 'Young girl on a bicycle beside a Garden Gate Nursery Open to Public sign',
		caption: 'Open to the public',
	},
	{
		src: open12,
		alt: 'Woman standing among potted nursery plants near a travel trailer',
		caption: 'Among the stock',
	},
	{
		src: open13,
		alt: 'Bearded man standing beside rows of flowering white blossom trees',
		caption: 'Blooming rows',
	},
	{
		src: open14,
		alt: 'Young girl laughing in a John Deere utility vehicle with pink blossoming trees behind',
		caption: 'Spring in the Gator',
		objectPosition: 'top',
	},
	{
		src: open15,
		alt: 'John Deere tractor and hopper unloading a large pile of soil under the barn',
		caption: 'Soil for the season',
	},
];

/** Girl with OPEN TO PUBLIC sign — strongest event signal */
export const story2011Featured = story2011Photos[10];
