import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { github, gotosite } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

// ProjectCard Component
const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.4 * index, 0.5)}
      className="flex-shrink-0 mx-2 my-4 flex flex-col"
      style={{ width: '350px', height: '600px' }} // Fixed width and height
    >
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-2xl h-full green-pink-gradient p-[1px]'>
        <div className='bg-tertiary w-full h-full rounded-2xl p-4 flex flex-col justify-between'>
          <div>
            <div className='relative w-full h-3/5'>
              <img src={image} alt={name} className='w-full h-full rounded-[10px] object-cover border-[1px] border-secondary' />
              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div onClick={() => window.open(website_link, '_blank')} className='black-gradient w-9 h-9 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer mr-2'>
                  <img src={gotosite} alt='website link' className='w-4/5 h-4/5 object-contain' />
                </div>
                <div onClick={() => window.open(source_code_link, '_blank')} className='black-gradient w-9 h-9 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer '>
                  <img src={github} alt='source code link' className='w-4/5 h-4/5 object-contain' />
                </div>
              </div>
            </div>
            <div className='mt-2'> {/* Reduced margin-top */}
              <h3 className='text-white font-bold text-[18px]'>{name}</h3>
              <p className='mt-1 text-secondary text-[12px]'>{description}</p> {/* Reduced margin-top */}
            </div>
          </div>
          <div className='flex flex-wrap gap-3'> {/* Added margin-top for space between description and tags */}
            {tags.map(tag => (
              <p key={tag.name} className={`text-[12px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

// ProjectCarousel Component
const ProjectCarousel = ({ category, projects }) => {
  return (
    <div className='mt-16 mb-20 flex flex-col items-center'> {/* Margin bottom for spacing between carousels */}
      <h3 className="text-2xl font-bold">{category}</h3>
      <div className='relative w-full' style={{ maxWidth: '1200px' }}>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={33.33} // Adjust based on the number of items you want to display at once
          className='mt-5'
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

// Works Component
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-primary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='flex flex-col items-center'>
        <ProjectCarousel category="Web App Development" projects={projects.webAppDev} />
        <ProjectCarousel category="Game Development" projects={projects.gameDev} />
        <ProjectCarousel category="AI Data Development" projects={projects.aidataDev} />
        <ProjectCarousel category="Embedded Systems Development" projects={projects.embededsysDev} />
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');
