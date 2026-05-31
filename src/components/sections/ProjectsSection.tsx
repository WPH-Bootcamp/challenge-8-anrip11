import React, { useContext } from 'react';
import { Heading } from '../ui/Heading';
import { ThemeContext } from '../../ThemeContext';
import { ProjectsData } from '../../data/projects-data';

export const ProjectsSection: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? 'dark';

  return (
    <section
      id='Projects'
      className='w-full bg-white dark:bg-black font-body py-16 lg:py-[100px] overflow-hidden transition-colors duration-500'
    >
      <div className='max-w-[393px] lg:max-w-[1440px] mx-auto px-6 lg:px-[140px]'>
        <div className='w-full flex-shrink-0'>
          <Heading
            title='From Vision to Launch! Projects We’re Proud Of'
            subtitle='Take a closer look at our recent work powering startups, enterprises, and everything in between.'
            align='center'
            className='[&_h2]:!text-neutral-950 dark:[&_h2]:!text-neutral-25 [&_p]:!text-neutral-500 dark:[&_p]:!text-neutral-400'
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 w-full'>
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className='group flex flex-col w-full text-left cursor-pointer'
            >
              <div className='w-full aspect-[352/276] lg:h-[354px] rounded-2xl overflow-hidden bg-neutral-950 relative transition-colors duration-500'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover object-top pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.04]'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none' />
              </div>

              <div className='mt-5 pl-1'>
                <span className='text-xs lg:text-sm font-semibold text-[#FF623E] tracking-wider block mb-1'>
                  {project.category}
                </span>

                <h3
                  className={`text-lg lg:text-xl font-bold tracking-wide transition-colors duration-300
                  ${
                    theme === 'light'
                      ? 'text-neutral-950 group-hover:text-neutral-950/80'
                      : 'text-neutral-25 group-hover:text-white'
                  }`}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
