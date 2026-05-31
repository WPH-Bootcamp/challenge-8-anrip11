// src/components/sections/AboutSection.tsx
import React, { useContext } from 'react';
import { Heading } from '../ui/Heading';
import { ThemeContext } from '../../ThemeContext';
import { aboutData } from '../../data/about-data';

export const AboutSection: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? 'dark';

  return (
    <section
      id='About'
      className='w-full bg-white dark:bg-black font-body overflow-hidden transition-colors duration-500'
    >
      <div className='max-w-[1440px] mx-auto h-auto lg:h-[598px] px-6 lg:px-[140px] py-16 lg:py-[80px] flex flex-col items-center justify-center'>
        <Heading
          title='End-to-End IT Solutions That Drive Results'
          subtitle='From strategy to execution, we deliver solutions that grow your business.'
          align='center'
          className='[&_h2]:!text-neutral-950 dark:[&_h2]:!text-neutral-25'
        />

        <div className='w-full max-w-[361px] lg:max-w-[1160px] grid grid-cols-2 gap-4 lg:flex lg:flex-nowrap lg:justify-between lg:items-center lg:gap-5'>
          {aboutData.map((item, index) => (
            <div
              key={index}
              className={`w-[172.5px] h-[172.5px] lg:w-[275px] lg:h-[275px] rounded-full border flex flex-col items-center justify-center text-center p-3 lg:p-6 mx-auto flex-shrink-0 transition-all duration-500 hover:scale-105 select-none
                ${
                  theme === 'light'
                    ? 'bg-neutral-50 border-neutral-200'
                    : 'bg-neutral-950 border-neutral-900'
                }`}
            >
              <div className='flex flex-col items-center justify-center gap-[6px]'>
                <span className='text-[36px] lg:text-[48px] font-bold text-primary-200 leading-none'>
                  {item.number}
                </span>

                <span
                  className={`text-[14px] lg:text-[20px] font-semibold leading-tight px-1 lg:px-2 w-full max-w-[243px] lg:w-[243px] lg:h-[34px] flex items-center justify-center text-center transition-colors duration-500
                  ${theme === 'light' ? 'text-neutral-800' : 'text-neutral-25'}`}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
