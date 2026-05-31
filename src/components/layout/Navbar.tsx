// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';
import logoSymbol from '../../assets/logo-symbol.png';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { menuItems } from '../../data/navigation-data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScrollToContact = () => {
    setIsOpen(false);
    const element = document.getElementById('ContactSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full font-body sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/50 dark:bg-black/50 backdrop-blur-[40px]'
          : 'bg-white dark:bg-black backdrop-blur-none'
      }`}
    >
      <div className='max-w-[1440px] mx-auto h-[84px] px-6 lg:px-[140px] flex items-center justify-between md:grid md:grid-cols-3 md:items-center'>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='flex items-center gap-3 cursor-pointer select-none md:justify-self-start'
        >
          <img
            src={logoSymbol}
            alt='Logo Symbol'
            className='w-[29.59px] h-[32.46px] object-contain'
          />
          <span className='text-black dark:text-white text-xl font-bold tracking-tight'>
            Your Logo
          </span>
        </div>

        <div className='hidden md:flex items-center gap-3 text-black dark:text-white md:justify-self-center'>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.targetId}`}
              className='hover:text-primary-200 dark:hover:text-primary-200 transition-colors duration-200 text-sm font-medium px-4 py-2 rounded-lg'
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className='hidden md:flex items-center gap-6 md:justify-self-end'>
          <ThemeToggle className='w-10 h-10' />

          <Button
            variant='primary'
            className='w-[197px] h-[44px]'
            onClick={handleScrollToContact}
          >
            Let's Talk
          </Button>
        </div>

        <div className='flex md:hidden items-center gap-4'>
          <ThemeToggle className='w-9 h-9' />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-black dark:text-white focus:outline-none cursor-pointer'
            aria-label='Toggle Menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden px-6 py-6 space-y-4 absolute left-0 w-full animate-fadeIn transition-all duration-500 ${
            isScrolled
              ? 'bg-white/80 dark:bg-black/80 backdrop-blur-[40px]'
              : 'bg-white dark:bg-black'
          }`}
        >
          <div className='flex flex-col gap-2'>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.targetId}`}
                onClick={() => setIsOpen(false)}
                className='block text-neutral-700 dark:text-neutral-400 hover:text-primary-200 dark:hover:text-primary-200 font-medium text-base px-4 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200'
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button
            variant='primary'
            className='w-full h-[44px] mt-2'
            onClick={handleScrollToContact}
          >
            Let's Talk
          </Button>
        </div>
      )}
    </nav>
  );
};
