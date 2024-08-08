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
	avoidem,
	banc_essai,
	wolfit,
	momento,
	speedgun,
	chatbot,
	theconcierge,
	tinkerkit,
	competition_robotics,
	menuar,
	langage_rec,
	keras,
	othelloia,
	chessme,
	heavenvr,
	ensimasso,
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

const projects = {
  webAppDev: [
	{
		name: 'Reversia',
		description:
		  'A Reversi game project with an AI model or human opponent. With multiple modes, runs on ios & android developed using Python and ionic-angular.',
		tags: [
		  { name: 'Python', color: 'blue-text-gradient' },
		  { name: 'DevOps', color: 'green-text-gradient' },
		  { name: 'Ionic', color: 'pink-text-gradient' },
		],
		image: ReversIA,
		source_code_link: 'https://github.com/exslym/ecommerce/',
		website_link: 'https://e-commerce-exs.payloadcms.app/',
	},

	{
	  name: 'Chatbot Telegram',
	  description:
		'A Telegram chatbot that interacts with users through automated responses and various tasks based on commands. Utilizes Telegram API and Post-Soap API for seamless integration.',
	  tags: [
		{ name: 'Java', color: 'blue-text-gradient' },
		{ name: 'Spring', color: 'green-text-gradient' },
		{ name: 'Postman', color: 'pink-text-gradient' },
		{ name: 'Soap API', color: 'yellow-text-gradient' },
	  ],
	  image: chatbot,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'Momento',
	  description:
		'An event management app that streamlines event planning and guest management. Features include event creation, scheduling, and notifications for a smooth event experience.',
	  tags: [
		{ name: 'Flutter', color: 'blue-text-gradient' },
		{ name: 'Firebase', color: 'green-text-gradient' },
		{ name: 'REST APIs', color: 'pink-text-gradient' },
	  ],
	  image: momento,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'AvoidEm',
	  description:
		'A location-sharing app that tracks and shares real-time locations. Includes features for privacy controls, notifications, and location tracking to enhance user connectivity.',
	  tags: [
		{ name: 'Kotlin', color: 'blue-text-gradient' },
		{ name: 'Firebase', color: 'green-text-gradient' },
		{ name: 'Maps API', color: 'pink-text-gradient' },
	  ],
	  image: avoidem,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'EnsimAsso',
	  description:
		'A website designed for school associations, featuring user-friendly interfaces and tools for association management. Provides a centralized platform for various association activities.',
	  tags: [
		{ name: 'Figma', color: 'green-text-gradient' },
		{ name: 'Splinetool', color: 'pink-text-gradient' },
	  ],
	  image: ensimasso,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  ],
  gameDev: [
	{
	  name: 'HeavenVR',
	  description:
		'A VR game set in a paradise-themed environment, featuring immersive missions and experiences. Built with Unity and Blender for a captivating virtual reality experience.',
	  tags: [
		{ name: 'Blender', color: 'blue-text-gradient' },
		{ name: 'Unity', color: 'green-text-gradient' },
		{ name: 'C#', color: 'pink-text-gradient' },
		{ name: 'VR Development', color: 'yellow-text-gradient' },
	  ],
	  image: heavenvr,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'MenuAR',
	  description:
		'An augmented reality menu app that allows users to scan dishes and place orders from their mobile devices. Enhances dining with interactive and immersive features.',
	  tags: [
		{ name: 'Unity', color: 'blue-text-gradient' },
		{ name: 'Splinetool', color: 'green-text-gradient' },
		{ name: 'ARKit', color: 'pink-text-gradient' },
		{ name: 'Vuforia', color: 'yellow-text-gradient' },
	  ],
	  image: menuar,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},

	{
		name: 'ChessMe',
		description:
		  'A chess game app with a chat feature for player interactions. Supports real-time gameplay and communication through a Node.js backend and React frontend.',
		tags: [
		  { name: 'React', color: 'blue-text-gradient' },
		  { name: 'Axios', color: 'green-text-gradient' },
		  { name: 'Node.js', color: 'pink-text-gradient' },
		  { name: 'Socket.io', color: 'yellow-text-gradient' },
		],
		image: chessme,
		source_code_link: 'https://github.com/exslym/ecommerce/',
		website_link: 'https://e-commerce-exs.payloadcms.app/',
	},

	{
		name: '2048',
		description:
		  'A classic 2048 puzzle game implemented with JavaScript, HTML, and CSS. Features a responsive design and smooth gameplay for a timeless gaming experience.',
		tags: [
		  { name: 'JavaScript', color: 'blue-text-gradient' },
		  { name: 'HTML', color: 'green-text-gradient' },
		  { name: 'CSS', color: 'pink-text-gradient' },
		],
		image: game_2048,
		source_code_link: 'https://github.com/exslym/ecommerce/',
		website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  ],
  aidataDev: [
	{
	  name: 'Voice Language Recognition',
	  description:
		'A project that recognizes different languages from voice inputs using Python and TensorFlow. Includes model training and implementation of advanced voice recognition techniques.',
	  tags: [
		{ name: 'Python', color: 'blue-text-gradient' },
		{ name: 'TensorFlow', color: 'green-text-gradient' },
		{ name: 'Librosa', color: 'pink-text-gradient' },
	  ],
	  image: langage_rec,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'Image Recognition',
	  description:
		'An image recognition system that classifies and detects objects within images using Python and Keras. Employs convolutional neural networks (CNNs) for accurate analysis.',
	  tags: [
		{ name: 'Python', color: 'blue-text-gradient' },
		{ name: 'Keras', color: 'green-text-gradient' },
		{ name: 'OpenCV', color: 'pink-text-gradient' },
		{ name: 'CNNs', color: 'yellow-text-gradient' },
	  ],
	  image: keras,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'OthelloIA',
	  description:
		'An AI-powered Reversi (Othello) game that lets players compete against various AI difficulty levels. Uses Python and TensorFlow for game logic and AI strategies.',
	  tags: [
		{ name: 'Python', color: 'blue-text-gradient' },
		{ name: 'TensorFlow', color: 'green-text-gradient' },
		{ name: 'Scikit-learn', color: 'pink-text-gradient' },
	  ],
	  image: othelloia,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'Wolfit',
	  description:
		'A hackathon project featuring a werewolf game with AI-driven storytelling. Utilizes Python and advanced NLP techniques to create a dynamic, interactive experience.',
	  tags: [
		{ name: 'Python', color: 'blue-text-gradient' },
		{ name: 'LLM', color: 'green-text-gradient' },
		{ name: 'NLP', color: 'pink-text-gradient' },
	  ],
	  image: wolfit,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'TheConcierge',
	  description:
		'A web app for concierge management, integrating MongoDB, SQL, PHP, and Node.js for comprehensive data handling and user management. Designed for efficient service delivery.',
	  tags: [
		{ name: 'MongoDB', color: 'blue-text-gradient' },
		{ name: 'SQL', color: 'green-text-gradient' },
		{ name: 'PHP', color: 'pink-text-gradient' },
		{ name: 'Express.js', color: 'yellow-text-gradient' },
		{ name: 'Node.js', color: 'yellow-text-gradient' },
	  ],
	  image: theconcierge,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  ],
  embededsysDev: [

	{
	  name: 'Bras Robotique',
	  description:
		'A project featuring a robotic arm controlled by Arduino and servo motors. Demonstrates precise control and automation applications in practical scenarios.',
	  tags: [
		{ name: 'Arduino', color: 'blue-text-gradient' },
		{ name: 'Tinkerkit', color: 'green-text-gradient' },
		{ name: 'Servo Motors', color: 'pink-text-gradient' },
	  ],
	  image: tinkerkit,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'Competition Robotique',
	  description:
		'A robotics competition project featuring tennis-playing robots. Uses C++ programming, PID control, and embedded systems to achieve high performance in competitions.',
	  tags: [
		{ name: 'C', color: 'blue-text-gradient' },
		{ name: 'C++', color: 'green-text-gradient' },
		{ name: 'PID Control', color: 'pink-text-gradient' },
		{ name: 'Embedded Systems', color: 'yellow-text-gradient' },
	  ],
	  image: competition_robotics,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'Banc Essai',
	  description:
		'An experimental bench project designed for testing and evaluating various mechanical and electronic components. Features real-time data logging and analysis capabilities.',
	  tags: [
		{ name: 'Arduino', color: 'blue-text-gradient' },
		{ name: 'Sensors', color: 'green-text-gradient' },
		{ name: 'Data Logging', color: 'pink-text-gradient' },
	  ],
	  image: banc_essai,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  
	{
	  name: 'SpeedGun',
	  description:
	    'A project focused on the conception and creation of a speed radar. Utilizes 3D printing for physical components, PCB design with KiCad, and CAD modeling with SolidWorks for an integrated speed measurement solution.',
	  tags: [
	    { name: '3D Printing', color: 'blue-text-gradient' },
	    { name: 'PCB Design', color: 'green-text-gradient' },
	    { name: 'KiCad', color: 'pink-text-gradient' },
	    { name: 'SolidWorks', color: 'yellow-text-gradient' },
	  ],
	  image: speedgun,
	  source_code_link: 'https://github.com/exslym/ecommerce/',
	  website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
  ],
};
  

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: 'https://www.linkedin.com/in/${linkedinUser}/',
	},
	{
		name: 'github',
		icon: github_alt,
		link: 'https://github.com/${githubUser}/',
	},
	{
		name: 'discord',
		icon: discord,
		link: 'https://discordapp.com/users/${discordUser}/',
	},
];

export { experiences, projects, socials, technologies };


