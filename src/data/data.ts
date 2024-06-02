export interface Testimonial {
	name: string;
	testimony: string;
	verified: boolean;
  }

export interface DataProps {
	title: string;
	subtitle: string;
	price: number;
	offer: number;
	stock: number;
	qualification: number,
	description: string;
	list: string[];
	paragraph: string;
	button_confirm: string;
	button_decline: string;
	image_01: string;
	image_02: string;
	testimonials: Testimonial[];
}

export const data = {
	title: "one time only special price for 6 extra clarifion for only $14 each ($84.00 total!)",
	subtitle: "clarifion air ionizer",
	price: 84,
	offer: 180,
	stock: 12,
	qualification: 5,
	description: "Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.",
	list: [
		"Negative Ion Technology may help with allergens",
		"Designed for air rejuvenation",
		"Perfect for every room in all types of places",
	],
	paragraph: "Save 53% and get 6 extra Clarifision for only $14 Each",
	button_confirm: "Yes - Claim my discount",
	button_decline: "no thanks, I don’t want this.",
	image_01: "/assets/product_image_01.png",
	image_02: "/assets/product_image_02.jpg",
	testimonials: [
		{
		  name: "Ken T.",
		  testimony: "“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.“",
		  verified: true,
		},
	  ]
}