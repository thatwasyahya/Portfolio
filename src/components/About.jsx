import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.div
				variants={fadeIn('', '', 0.2, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				<p className="text-justify">
					I am a fifth-year Software Engineering student at the École Nationale Supérieure d’Ingénieur du Mans (ENSIM) with a passion for creating innovative solutions in Web and App development. My academic journey has equipped me with a solid foundation in computer science principles and a diverse skill set in programming languages and development frameworks. I am driven by a desire to merge cutting-edge technologies with intuitive design to deliver seamless user experiences, by using the skills I've learned during my academic journey, such as:
				</p>
				<ul className="text-justify">
					<li>
						<strong>Software Engineering:</strong> Currently pursuing my degree at ENSIM, where I have gained expertise in programming languages such as Java, Python, and JavaScript. I have a strong understanding of software development methodologies and algorithms, coupled with practical experience in web and app development.
					</li>
					<li>
						<strong>Web Development Technologies:</strong> Proficient in HTML5, CSS3, and JavaScript, with hands-on experience in building responsive and user-friendly interfaces. Skilled in front-end development using frameworks like React.js and Angular to create dynamic and interactive web applications.
					</li>
					<li>
						<strong>Back-end Development:</strong> Knowledgeable in back-end development using Node.js and Express.js, with experience in building RESTful APIs and integrating with databases like MySQL, MongoDB, and PostgreSQL. Familiar with server-side technologies for handling authentication, authorization, and data management.
					</li>
					<li>
						<strong>Version Control & Collaboration:</strong> Proficient in using Git for version control and collaborative development, enabling seamless integration and teamwork in software projects.
					</li>
				</ul>
				<p className="text-justify">
					Currently seeking an internship opportunity in Web/App development to further enhance my skills, gain practical experience, and contribute to the success of innovative projects. I am enthusiastic about collaborating with industry professionals and leveraging my expertise to tackle real-world challenges in software engineering.
				</p>
			</motion.div>
		</>
	);
};

export default SectionWrapper(About, 'about');
