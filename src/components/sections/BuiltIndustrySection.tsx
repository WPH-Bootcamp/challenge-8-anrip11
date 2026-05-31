// src/components/sections/BuiltIndustry.tsx
import React, { useState } from 'react';
import { Heading } from '../ui/Heading';
import { industriesData } from '../../data/industry-data';

export const BuiltIndustrySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('fintech');

  const currentContent =
    industriesData.find((ind) => ind.id === activeTab) || industriesData[0];

  return (
    <section className='w-full bg-white dark:bg-black font-body py-16 lg:py-[80px] overflow-hidden transition-colors duration-500'>
      <div className='max-w-[393px] lg:max-w-[1440px] mx-auto px-6 lg:px-[140px]'>
        <div className='w-full flex-shrink-0'>
          <Heading
            title='Built for Your Industry'
            subtitle="We've helped companies across industries launch smarter, faster, and more securely."
            align='left'
            className='[&_h2]:!text-neutral-950 dark:[&_h2]:!text-neutral-25 [&_p]:!text-neutral-600 dark:[&_p]:!text-neutral-400'
          />
        </div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 w-full items-start'>
          <div className='flex flex-row lg:flex-col w-full lg:w-[256px] border-b lg:border-b-0 gap-2 lg:gap-[24px] overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none transition-colors duration-500'>
            {industriesData.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap text-left text-base lg:text-xl font-bold py-2 px-4 lg:py-0 lg:pl-6 w-full lg:w-[256px] lg:h-[34px] flex items-center transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 outline-none cursor-pointer select-none
                    ${
                      isActive
                        ? 'text-neutral-950 dark:text-neutral-25 border-[#FF623E] bg-black/5 dark:bg-white/5 lg:bg-transparent lg:dark:bg-transparent'
                        : 'text-[#AAAAAA] dark:text-neutral-600 border-transparent hover:text-neutral-700 dark:hover:text-neutral-400'
                    }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          <div className='flex-1 w-full space-y-5 animate-fadeIn'>
            <p className='text-sm lg:text-lg font-medium leading-relaxed max-w-[840px] text-neutral-950 dark:text-neutral-25 transition-colors duration-500'>
              {currentContent.description}
            </p>

            <div className='w-full h-[220px] md:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden bg-neutral-950 relative group transition-colors duration-500'>
              <img
                src={currentContent.image}
                alt={`${currentContent.name} Showcase`}
                className='w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
