import React from 'react';
import { companyLogos } from '../../data/company-data';

export const CompanyLogosSection: React.FC = () => {
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <section className='w-full h-[236px] bg-white dark:bg-black font-body overflow-hidden transition-colors duration-500'>
      <div className='max-w-[1440px] mx-auto flex flex-col items-center'>
        <h2 className='w-full h-[36px] font-bold text-lg text-black dark:text-neutral-25 text-center tracking-wide flex items-center justify-center'>
          Trusted by Global Innovators & Leading Brands
        </h2>

        <div className='mt-[36px] pt-[40px] pb-[40px] mb-[36px] w-full relative overflow-hidden group'>
          <div className='absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none' />

          <div className='absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none' />

          <div className='flex w-max gap-[48px] animate-marquee group-hover:[animation-play-state:paused]'>
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className='h-[48px] w-auto flex items-center justify-center flex-shrink-0'
              >
                <img
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  className='h-full w-auto object-contain mix-blend-luminosity opacity-50 grayscale hover:mix-blend-normal hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
