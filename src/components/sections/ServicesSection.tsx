import React, { useContext } from 'react';
import { Heading } from '../ui/Heading';
import { ThemeContext } from '../../ThemeContext';
import { servicesData } from '../../data/services-data';

export const ServicesSection: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? 'dark';

  return (
    <section
      id='Services'
      className='w-full bg-white dark:bg-black font-body py-16 lg:py-[80px] overflow-hidden transition-colors duration-500'
    >
      <div className='max-w-[393px] lg:max-w-[1440px] mx-auto px-6 lg:px-[140px]'>
        <div className='flex-shrink-0'>
          <Heading
            title='Smart IT Solutions That Grow With You'
            subtitle='Tailored tech to boost efficiency, security, and results.'
            align='center'
            className='[&_h2]:!text-neutral-950 dark:[&_h2]:!text-neutral-25 [&_p]:!text-neutral-500 dark:[&_p]:!text-neutral-400'
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-6 w-full'>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`relative border rounded-2xl pt-12 pb-8 px-6 transition-all duration-300 hover:scale-[1.03] select-none flex flex-col justify-between
                ${
                  theme === 'light'
                    ? 'bg-neutral-50 border-neutral-200'
                    : 'bg-neutral-950 border-neutral-900'
                }`}
            >
              <div className='absolute -top-6 left-6 w-12 h-12 flex items-center justify-center drop-shadow-[0_8px_16px_rgba(255,98,62,0.2)]'>
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className='w-full h-full object-contain pointer-events-none'
                />
              </div>

              <div>
                <h3
                  className={`text-lg lg:text-xl font-bold tracking-wide mb-2 transition-colors duration-500
                  ${theme === 'light' ? 'text-neutral-950' : 'text-neutral-25'}`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm font-medium leading-relaxed transition-colors duration-500
                  ${theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'}`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
