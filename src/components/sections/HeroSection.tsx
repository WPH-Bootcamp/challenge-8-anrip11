// src/components/sections/Hero.tsx
import React, { useContext } from 'react';
import { Button } from '../ui/Button';
import { ThemeContext } from '../../ThemeContext';
import { heroContent } from '../../data/hero-data';

export const HeroSection: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? 'dark';

  const handleScrollToContact = () => {
    const element = document.getElementById('ContactSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='w-full bg-white dark:bg-black font-body overflow-hidden transition-colors duration-500'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-[140px] py-12 lg:py-[0px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0'>
        <div className='w-full lg:max-w-[653px] flex flex-col justify-center text-left z-10'>
          <h1 className='text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight text-black dark:text-white'>
            {heroContent.titleNormalBefore}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-300'>
              {heroContent.titleHighlight}
            </span>
            {heroContent.titleNormalAfter}
          </h1>

          <p className='mt-6 max-w-[600px] font-semibold text-xl leading-relaxed text-black dark:text-neutral-25'>
            {heroContent.description}
          </p>

          <div className='mt-8 flex justify-center lg:justify-start w-full'>
            <Button
              variant='primary'
              className='w-[361px] h-[44px] lg:w-[200px] lg:h-[48px] py-2 rounded-full text-sm shadow-lg'
              onClick={handleScrollToContact}
            >
              Let's Talk
            </Button>
          </div>
        </div>

        <div className='w-full lg:w-auto flex justify-center items-center'>
          <div className='w-full max-w-[400px] sm:max-w-[500px] lg:w-[663px] lg:h-[663px] aspect-square relative'>
            <img
              src={
                theme === 'dark'
                  ? heroContent.imageDark
                  : heroContent.imageLight
              }
              alt='Smarter Growth Tech Illustration'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
