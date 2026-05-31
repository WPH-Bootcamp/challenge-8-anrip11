// src/components/sections/OurProcess.tsx
import React, { useState, useContext } from 'react';
import { Heading } from '../ui/Heading';
import { ThemeContext } from '../../ThemeContext';
import { processSteps } from '../../data/process-data';

export const OurProcessSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? 'dark';

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section
      id='OurProcess'
      className='w-full h-[853px] lg:h-[1099px] gap-[11px] bg-white dark:bg-black font-body py-10 lg:py-[80px] overflow-hidden transition-colors duration-500'
    >
      <div className='max-w-[393px] lg:max-w-[1440px] mx-auto px-4 lg:px-[140px] flex flex-col'>
        <div className='flex-shrink-0'>
          <Heading
            title='Our Process'
            subtitle='Clear steps. Smart execution. Results you can count on.'
            align='center'
            className='[&_h2]:!text-neutral-950 dark:[&_h2]:!text-neutral-25'
          />
        </div>

        <div className='relative w-full flex flex-col items-center'>
          <div
            className={`absolute left-[20px] lg:left-1/2 top-[47px] bottom-[47px] w-[1px] transform lg:-translate-x-1/2 z-0 transition-colors duration-500 
              ${theme === 'light' ? 'bg-neutral-200' : 'bg-neutral-800'}`}
          />

          <div className='w-full space-y-4 relative z-10'>
            {processSteps.map((step, index) => {
              const isEven = index % 2 !== 0;
              const isOpen = openIndexes.includes(index);

              return (
                <div
                  key={index}
                  className={`flex flex-row items-center w-[361px] mx-auto gap-3 lg:gap-0 h-[94px] lg:w-[1160px] lg:h-[116px] lg:justify-center ${
                    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  <div className='w-[309px] lg:w-[532px] order-2 lg:order-none'>
                    <div
                      onClick={() => toggleAccordion(index)}
                      className={`w-full text-left p-4 lg:px-6 transition-all duration-300 cursor-pointer select-none border rounded-2xl flex flex-col justify-center
                        ${theme === 'light' ? 'bg-neutral-50 border-neutral-200' : 'bg-neutral-950 border-neutral-900'}
                        ${isOpen ? 'h-[94px] lg:h-[116px]' : 'h-[60px] lg:h-[82px]'}
                      `}
                    >
                      <div className='flex justify-between items-center lg:items-start gap-2 lg:gap-4'>
                        <div className='flex-1 min-w-0'>
                          <h3
                            className={`text-xs lg:text-base font-bold tracking-wide truncate transition-colors duration-500
                            ${theme === 'light' ? 'text-neutral-950' : 'text-neutral-25'}`}
                          >
                            {step.title}
                          </h3>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen
                                ? 'max-h-12 mt-1 lg:mt-2 opacity-100'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p
                              className={`text-[10px] lg:text-sm font-medium leading-tight lg:leading-relaxed line-clamp-2 transition-colors duration-500
                              ${theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'}`}
                            >
                              {step.subtitle}
                            </p>
                          </div>
                        </div>

                        <svg
                          className={`w-3.5 h-3.5 lg:w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2.5}
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className='w-10 h-10 lg:w-[46px] lg:h-[46px] bg-primary-200 text-white font-bold text-sm lg:text-base rounded-full flex items-center justify-center flex-shrink-0 z-20 order-1 lg:order-none lg:mx-[25px] shadow-[0_0_15px_rgba(255,98,62,0.25)]'>
                    {index + 1}
                  </div>

                  <div className='hidden lg:block lg:w-[532px]' />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
