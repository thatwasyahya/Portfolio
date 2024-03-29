import {
	ai_3d_tshirts,
	ai_summarizer,
	astro,
	angular,
	chat_gpt,
	cns_portfolio,
	css,
	currency_list,
	dcreative,
	discord,
	doctoratwork,
	doctoratwork1,
	e_commerce,
	ketchup,
	eventlify,
	figma,
	flutter,
	freelance,
	game_2048,
	git,
	github_alt,
	html,
	mcdo,
	nodejs,
	ionic,
	javascript,
	jetbrains,
	linkedin,
	qwik,
	reactjs,
	social_network,
	space_invaders,
	tailwind,
	threejs,
	tiny_world_3d,
	typescript,
	vite,
	webpack,
	worldpress,
	NeverLost,
	projectdb,
	captcha,
	ReversIA,
	Treecoin,
	liberty,
} from '../assets';

const githubUser = import.meta.env.VITE_APP_GITHUB_USER;
const linkedinUser = import.meta.env.VITE_APP_LINKEDIN_USER;
const discordUser = import.meta.env.VITE_APP_DISCORD_USER;

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const technologies = [
	{
		name: 'nodejs',
		icon: nodejs,
	},
	{
		name: 'Angular',
		icon: angular,
	},
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'Figma',
		icon: figma,
	},
	{
		name: 'ThreeJS',
		icon: threejs,
	},
	{
		name: 'JetBrains',
		icon: jetbrains,
	},
	{
		name: 'Ionic',
		icon: ionic,
	},
	// {
	// 	name: 'HTML5',
	// 	icon: html,
	// },
	// {
	// 	name: 'CSS3',
	// 	icon: css,
	// },
	// {
	// 	name: 'Tailwind',
	// 	icon: tailwind,
	// },
	// {
	// 	name: 'git',
	// 	icon: git,
	// },
	// {
	// 	name: 'Webpack',
	// 	icon: webpack,
	// },
	{
		name: 'worldpress',
		icon: worldpress,
	},
];

const experiences = [
	{
		title: 'Versatile coworker',
		company_name: 'McDonald\'s',
		icon: mcdo,
		iconBg: '#003500',
		date: '2023 : June - November',
		points: [
			"Roles in McDonald's Kitchen: Managed various positions within the kitchen, including bread preparation, topping application, protein handling, meat grilling, and frying, ensuring smooth production flow and adherence to quality standards.",
			'Cleanliness and Stock Management: Ensured cleanliness along the production line, maintained production quality, and managed inventory, including sourcing necessary items from different storage areas in case of stock shortages.',
			"Dishwashing: Ensured cleanliness of utensils and surfaces, particularly for reuse, with a thorough cleaning process during closing hours.",
			'Counter Responsibilities: Engaged in diverse tasks at the counter, including restaurant cleanliness supervision, table service, beverage management, special orders handling such as salads, and assembly tasks. Also responsible for managing the drive-through, handling payments, and coordinating order quality checks before delivery.',
		],
	},
	{
		title: 'Internship',
		company_name: 'Détection + Automatisme',
		icon: freelance,
		iconBg: '#383E56',
		date: '2022 : Mai - Aout',
		points: [
			'Creation of a test bench supervised by a human-machine interface: During my 10-week internship at Détection+Automatisme in Île-de-France, I was tasked with designing an innovative test bench under the supervision of a human-machine interface. This involved designing and building a comprehensive testing system, integrating sensors, actuators, and a user-friendly interface to control and monitor the testing process.',
			'Development and study of electrical diagrams: An integral part of my role was to create and study detailed electrical diagrams for the test bench. This included analyzing system requirements, selecting appropriate electrical components, creating accurate electrical diagrams, and verifying their compliance with standards and technical specifications.',
			'Programming of Industrial Automation: In addition to hardware design, I was also responsible for programming industrial automation to automate the operations of the test bench. This involved developing PLC (Programmable Logic Controller) programs to control actuator movements, collect sensor data, and manage user interfaces.',
		],
	},
];

const projects = [
	{
		name: 'E-Commerce Shop App',
		description:
			'Ketch\'up is a mobile application designed to facilitate reunions among friends by streamlining the planning process for trips, accommodations, activities, and expenses. The app considers the availability and budget constraints of each participant to ensure a seamless and enjoyable experience. With Ketch\'up, users can easily coordinate and organize meetups, ensuring that everyone\'s preferences and needs are taken into account.',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'payloadcms',
				color: 'pink-text-gradient',
			},
			{
				name: 'next',
				color: 'yellow-text-gradient',
			},
		],
		image: ketchup,
		source_code_link: 'https://github.com/exslym/ecommerce/',
		website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
	{
		name: '3D Tiny World',
		description:
			'NeverLost is an indoor navigation application equipped with augmented reality (AR) and image recognition artificial intelligence (IA) capabilities. Designed for use in complex indoor environments such as malls, train stations, airports, hospitals, and universities, NeverLost provides users with seamless navigation and guidance. The app offers features such as parking option booking, real-time availability updates, and detailed directions to destinations within these facilities. By combining AR technology with advanced IA, NeverLost enhances the user experience by providing intuitive and efficient indoor navigation solutions.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'threejs',
				color: 'yellow-text-gradient',
			},
		],
		image: NeverLost,
		source_code_link: 'https://github.com/exslym/Tiny-World-3D/',
		website_link: 'https://exslym.github.io/Tiny-World-3D/',
	},
	{
		name: 'Eventlify',
		description:
			' ReversIA the Reversi Othello Game App is a hybrid platform available for iOS, Android, and web users. This application allows players to enjoy the classic game of Reversi Othello in various modes. Users can challenge an AI opponent, watch two AI opponents play against each other, or engage in player versus player matches. The app also offers the flexibility to expand its offerings to host additional games in the future. With intuitive gameplay and multi-platform accessibility, ReversIA App provides an immersive and enjoyable gaming experience for all types of players.',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'next14',
				color: 'yellow-text-gradient',
			},
		],
		image: ReversIA,
		source_code_link: 'https://github.com/exslym/eventlify/',
		website_link: 'https://eventlify-exs.vercel.app/',
	},
	{
		name: '3D T-Shirts AI Design',
		description:
			'The Open Source Software Study Project involved conducting comprehensive research on both open source and closed-source software. Through interviews with industry professionals and analysis of user knowledge gaps, we gathered valuable insights. Using this information, we developed an application that serves as a comprehensive resource, integrating questionnaires, surveys, training modules, and informative graphs. The app aims to bridge the knowledge gap and provide users with a deeper understanding of both open source and closed-source software, empowering them to make informed decisions.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: liberty,
		source_code_link: 'https://github.com/exslym/3D-AI-Project/',
		website_link: 'https://exslym.github.io/3D-AI-Project/',
	},
	{
		name: 'Cryptocurrency Prices',
		description:
			'A website version of mobile App created using the Flutter framework. The app provides real-time information about the prices of various cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and many others.',
		tags: [
			{
				name: 'dart',
				color: 'blue-text-gradient',
			},
			{
				name: 'flutter',
				color: 'green-text-gradient',
			},
			{
				name: 'bloc',
				color: 'pink-text-gradient',
			},
			{
				name: 'firebase',
				color: 'yellow-text-gradient',
			},
		],
		image: Treecoin,
		source_code_link: 'https://github.com/exslym/Crypto-Coins-List/',
		website_link: 'https://cryptocurrency-prices-exslym.vercel.app/',
	},
	{
		name: 'AI Article Summarizer',
		description:
			'This minimalistic cozy color app is an AI article summarizer that transforms lengthy articles into clear and concise summaries, using an article extractor and summarizer by RapidAPI, powered by openAI GPT-4.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: projectdb,
		source_code_link: 'https://github.com/exslym/AI-Summarizer/',
		website_link: 'https://exslym.github.io/AI-Summarizer/',
	},
	
	{
		name: 'Space Invaders [Game]',
		description:
			'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'canvas',
				color: 'yellow-text-gradient',
			},
		],
		image: captcha,
		source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
		website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	},

	{
		name: 'Space Invaders [Game]',
		description:
			'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'canvas',
				color: 'yellow-text-gradient',
			},
		],
		image: space_invaders,
		source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
		website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	},
	{
		name: '2048 [Game]',
		description:
			'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a value equal to the sum of the two.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'htnl',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'algorithms',
				color: 'yellow-text-gradient',
			},
		],
		image: game_2048,
		source_code_link: 'https://github.com/exslym/2048-Game/',
		website_link: 'https://exslym.github.io/2048-Game/',
	},
	// {
	// 	name: 'ChatGPT App (web vers.)',
	// 	description:
	// 		'A website version of mobile app ChatGPT project where you can interact with openAI chatbot based on gpt-3.5-turbo-0301 model, also you can choose other model on the fly.',
	// 	tags: [
	// 		{
	// 			name: 'dart',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'flutter',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'openai-api',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: chat_gpt,
	// 	source_code_link: 'https://github.com/exslym/ChatGPT_App/',
	// 	website_link: 'https://chat-gpt-app-kohl.vercel.app/',
	// },
	// {
	// 	name: 'Social Network',
	// 	description:
	// 		'A social network project is a dynamic web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting.',
	// 	// description:
	// 	// 'A social network project is a web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting. ReactJS have been used as the primary front-end framework to create dynamic and interactive user interfaces that update in real-time.',
	// 	tags: [
	// 		{
	// 			name: 'typescript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'ant-design',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: social_network,
	// 	source_code_link: 'https://github.com/exslym/My-Social-Network/',
	// 	website_link: 'https://exslym.github.io/My-Social-Network/',
	// },
	// {
	// 	name: 'CNS-Portfolio',
	// 	description:
	// 		"The multi-page website with interactive educational question-answer quiz for physicians that helps to learn about treatment options and appropriate drug prescribing based on patient's history and various health conditions.",
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'multipage',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: cns_portfolio,
	// 	source_code_link: 'https://github.com/exslym/CNS-Portfolio/',
	// 	website_link: 'https://exslym.github.io/CNS-Portfolio/',
	// },
];

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: `https://www.linkedin.com/in/${linkedinUser}/`,
	},
	{
		name: 'github',
		icon: github_alt,
		link: `https://github.com/${githubUser}/`,
	},
	{
		name: 'discord',
		icon: discord,
		link: `https://discordapp.com/users/${discordUser}/`,
	},
];

export { experiences, projects, socials, technologies };
