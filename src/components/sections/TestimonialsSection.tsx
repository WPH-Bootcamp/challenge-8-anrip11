// src/components/sections/Testimonials.tsx
import React, { useState, useContext } from 'react';
import { Heading } from '../ui/Heading';
import { ThemeContext } from '../../ThemeContext';

import {
  initialTestimonials,
  starIcon,
  quoteIcon,
} from '../../data/testimonials-data';

export const TestimonialsSection: React.FC = () => {
  const [testimonialsData, setTestimonialsData] = useState(initialTestimonials);

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? 'dark';

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const activeIndex = 1;
  const cardWidthWithGap = 626;

  const handleCardClick = (clickedIndex: number) => {
    if (isAnimating) return;

    if (clickedIndex === 0) {
      setIsAnimating(true);
      setDirection('right');

      setTimeout(() => {
        setTestimonialsData((prev) => {
          const newData = [...prev];
          const lastItem = newData.pop();
          if (lastItem) newData.unshift(lastItem);
          return newData;
        });
        setIsAnimating(false);
        setDirection(null);
      }, 500);
    } else if (clickedIndex === 2) {
      setIsAnimating(true);
      setDirection('left');

      setTimeout(() => {
        setTestimonialsData((prev) => {
          const newData = [...prev];
          const firstItem = newData.shift();
          if (firstItem) newData.push(firstItem);
          return newData;
        });
        setIsAnimating(false);
        setDirection(null);
      }, 500);
    }
  };

  const getInlineStyle = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (direction === 'left')
        return { transform: `translateX(-${cardWidthWithGap}px)` };
      if (direction === 'right')
        return { transform: `translateX(${cardWidthWithGap}px)` };
      return { transform: 'translateX(0px)' };
    }
    return {};
  };

  return (
    <section
      id='Testimonials'
      className='w-full bg-white dark:bg-black font-body py-16 lg:py-[80px] overflow-hidden relative transition-colors duration-500'
    >
      <div className='hidden lg:block absolute left-0 top-0 bottom-0 w-[200px] bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent z-40 pointer-events-none transition-all duration-500' />
      <div className='hidden lg:block absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent z-40 pointer-events-none transition-all duration-500' />

      <div className='max-w-[393px] lg:max-w-[1440px] mx-auto px-6 lg:px-[140px] relative z-10'>
        <div className='w-full flex-shrink-0 !mb-[16px]'>
          <Heading
            title='What Partners Say About Working With Us'
            subtitle='Trusted voices. Real experiences. Proven results.'
            align='center'
            className='[&_h2]:!text-neutral-950 dark:[&_h2]:!text-neutral-25 [&_p]:!text-neutral-500 dark:[&_p]:!text-neutral-400'
          />
        </div>

        <div className='w-full flex flex-col lg:flex-row items-center justify-center mb-16 relative'>
          <div
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-8 w-full lg:w-auto ${
              isAnimating
                ? 'transition-transform duration-500 ease-out'
                : 'transition-none'
            }`}
            style={getInlineStyle()}
          >
            {testimonialsData.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(index)}
                  className={`w-full lg:w-[594px] h-auto lg:h-[292px] rounded-2xl pt-12 pb-12 px-8 border text-center transition-all duration-500 ease-out cursor-pointer relative flex flex-col items-center flex-shrink-0 select-none
                    ${theme === 'light' ? 'bg-[#DEDCDC]' : 'bg-neutral-950'}
                    ${
                      isActive
                        ? 'border-[#FF623E] opacity-100 lg:scale-[1.03] z-30 shadow-[0_12px_40px_rgba(255,98,62,0.15)]'
                        : theme === 'light'
                          ? 'border-neutral-200 opacity-100 lg:opacity-20 lg:scale-[0.96] z-20 hover:border-neutral-300'
                          : 'border-neutral-900 opacity-100 lg:opacity-20 lg:scale-[0.96] z-20 hover:border-white/10'
                    }`}
                >
                  <div className='absolute -top-10 left-6 w-20 h-20 pointer-events-none'>
                    <img
                      src={quoteIcon}
                      alt='Quote Icon'
                      className={`w-full h-full object-contain transition-all duration-500 ${
                        isActive
                          ? 'opacity-100 scale-100'
                          : 'opacity-10 scale-90'
                      }`}
                    />
                  </div>

                  <div className='flex items-center gap-1 mb-4 mt-2'>
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={starIcon}
                        alt='Star Rating'
                        className='w-[18px] h-[18px] object-contain'
                      />
                    ))}
                  </div>

                  <p
                    className={`text-sm lg:text-base font-medium leading-relaxed mb-6 max-w-[480px] transition-colors duration-500
                    ${theme === 'light' ? 'text-neutral-700' : 'text-[#A4A7AE]'}`}
                  >
                    {item.quote}
                  </p>

                  <div className='mt-auto'>
                    <h4
                      className={`text-sm lg:text-base font-bold tracking-wide transition-colors duration-500
                      ${theme === 'light' ? 'text-neutral-950' : 'text-[#FDFDFD]'}`}
                    >
                      {item.name}
                    </h4>
                    <p className='text-xs lg:text-sm font-semibold text-[#FF623E] mt-0.5 tracking-wide'>
                      {item.role}
                    </p>
                  </div>

                  <div
                    className={`absolute -bottom-[27px] left-1/2 transform -translate-x-1/2 w-[54px] h-[54px] rounded-full overflow-hidden border z-30 transition-colors duration-500
                    ${theme === 'light' ? 'border-neutral-200 bg-neutral-50' : 'border-neutral-900 bg-neutral-950'}`}
                  >
                    <img
                      src={item.avatar}
                      alt={`${item.name} Profile`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='flex items-center justify-center gap-2.5'>
          {[1, 2, 3].map((id, dotIndex) => {
            const currentPosition = testimonialsData.findIndex(
              (t) => t.id === id
            );
            const isDotActive = currentPosition === activeIndex;

            return (
              <button
                key={id}
                onClick={() => handleCardClick(currentPosition)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 outline-none cursor-pointer ${
                  isDotActive
                    ? 'bg-[#FF623E]'
                    : theme === 'light'
                      ? 'w-2.5 bg-neutral-300 hover:bg-[#A4A7AE]/60'
                      : 'w-2.5 bg-[#181D27] hover:bg-[#A4A7AE]/40'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
