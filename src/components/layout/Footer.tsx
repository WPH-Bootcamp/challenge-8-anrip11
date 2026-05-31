import React from 'react';
import logoSymbol from '../../assets/logo-symbol.png';

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export const Footer: React.FC = () => {
  const navLinks: NavLink[] = [
    { label: 'About', href: '#About' },
    { label: 'Service', href: '#Services' },
    { label: 'Projects', href: '#Projects' },
    { label: 'Testimonials', href: '#Testimonials' },
    { label: 'FAQ', href: '#Faq' },
  ];

  const socialLinks: SocialLink[] = [
    {
      label: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
          <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg
          className='w-4 h-4 stroke-current fill-none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
          <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: 'https://tiktok.com',
      icon: (
        <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
          <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.55.65 1.23 1.21 1.99 1.62.77.41 1.61.66 2.48.74v3.91c-1.26-.07-2.49-.45-3.58-1.12-.76-.47-1.42-1.11-1.93-1.87v6.76c.03 2.1-.64 4.15-1.92 5.74-1.42 1.76-3.55 2.82-5.83 2.97-2.45.16-4.9-.64-6.68-2.31-1.89-1.78-2.88-4.34-2.7-6.93.2-2.79 1.95-5.28 4.51-6.42 1.48-.66 3.12-.83 4.7-.49v4.06c-1.28-.46-2.72-.19-3.75.7-.91.79-1.37 1.99-1.28 3.2.1 1.46.97 2.76 2.29 3.39 1.15.55 2.51.46 3.58-.25.86-.57 1.37-1.55 1.37-2.59V.02z' />
        </svg>
      ),
    },
  ];

  return (
    <footer className='w-full bg-white dark:bg-black font-body py-12 lg:py-16 overflow-hidden transition-colors duration-500'>
      <div className='max-w-[393px] lg:max-w-[1440px] mx-auto px-6 lg:px-[140px]'>
        <div className='w-full bg-neutral-50 dark:bg-[#0D0E12] border border-neutral-200 dark:border-[#181D27] rounded-[32px] p-8 lg:p-16 flex flex-col transition-all duration-500'>
          <div className='w-full flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 mb-12 lg:mb-20'>
            <h2 className='text-3xl lg:text-[40px] font-bold tracking-tight leading-tight max-w-[400px] text-black dark:text-white transition-colors duration-500'>
              LET'S DISCUSS <br /> YOUR IDEAS
            </h2>

            <div className='flex items-start gap-3 select-none lg:pt-1.5'>
              <div className='w-8 h-8 flex-shrink-0 overflow-hidden'>
                <img
                  src={logoSymbol}
                  alt='Logo Symbol'
                  className='w-full h-full object-contain'
                />
              </div>
              <span className='text-xl lg:text-2xl font-bold tracking-tight text-black dark:text-white transition-colors duration-500 leading-none'>
                Your Logo
              </span>
            </div>
          </div>

          <div className='w-full h-[1px] bg-neutral-200 dark:bg-[#181D27] mb-8 lg:mb-10 transition-colors duration-500' />

          <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8'>
            <nav className='flex flex-wrap items-center gap-6 lg:gap-10'>
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className='text-sm lg:text-base font-medium text-neutral-600 dark:text-[#A4A7AE] hover:text-[#FF623E] dark:hover:text-[#FF623E] transition-colors duration-300'
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className='flex items-center gap-3'>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='w-10 h-10 rounded-full border border-neutral-200 dark:border-[#181D27] flex items-center justify-center text-neutral-600 dark:text-[#A4A7AE] hover:text-black dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-[#181D27] hover:border-black/10 dark:hover:border-[#FF623E]/50 transition-all duration-300 cursor-pointer outline-none'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
