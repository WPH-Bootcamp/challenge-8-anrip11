import React, { useState } from 'react';
import { faqData, consultationImg } from '../../data/faq-data';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id='Faq'
      className='w-full bg-white dark:bg-black font-body py-16 lg:py-[100px] overflow-hidden transition-colors duration-500'
    >
      <div className='max-w-[393px] lg:max-w-[1440px] mx-auto px-6 lg:px-[140px]'>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16 gap-4'>
          <div className='max-w-[550px]'>
            <h2 className='text-3xl lg:text-[44px] font-bold text-black dark:text-[#FDFDFD] tracking-tight leading-tight transition-colors duration-500'>
              Need Help? Start <br className='hidden lg:block' /> Here.
            </h2>
          </div>
          <div className='w-full lg:w-[245px] lg:h-[64px] flex lg:items-end lg:justify-end'>
            <p className='text-neutral-600 dark:text-[#A4A7AE] text-sm lg:text-base font-medium leading-relaxed lg:text-right transition-colors duration-500'>
              Everything you need to know — all in one place.
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-16 w-full'>
          <div className='w-full lg:w-[680px] flex flex-shrink-0 flex-col'>
            <div className='w-full border-t border-neutral-200 dark:border-[#181D27] transition-colors duration-500'>
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className='w-full border-b border-neutral-200 dark:border-[#181D27] py-6 flex flex-col transition-colors duration-500'
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className='w-full flex items-center justify-between text-left group outline-none cursor-pointer'
                    >
                      <span
                        className={`text-base lg:text-lg font-bold tracking-wide transition-colors duration-300 ${
                          isOpen
                            ? 'text-black dark:text-white'
                            : 'text-neutral-900 dark:text-[#FDFDFD] group-hover:text-[#FF623E]'
                        }`}
                      >
                        {item.question}
                      </span>

                      <div className='w-6 h-6 flex items-center justify-center relative flex-shrink-0 ml-4'>
                        <span className='absolute w-4 h-[2px] bg-black dark:bg-white rounded-sm transition-colors duration-500' />
                        <span
                          className={`absolute w-[2px] h-4 bg-black dark:bg-white rounded-sm transition-transform duration-300 ${
                            isOpen ? 'scale-y-0 rotate-90' : 'scale-y-100'
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100 mt-3'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className='overflow-hidden'>
                        <p className='text-neutral-600 dark:text-[#A4A7AE] text-sm lg:text-base font-medium leading-relaxed max-w-[620px] transition-colors duration-500'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='w-full lg:w-[329px] flex flex-col flex-shrink-0'>
            <div
              style={{ height: '453.38px' }}
              className='w-full lg:w-[329px] bg-[#C84B2B] rounded-3xl p-6 flex flex-col gap-6 items-start shadow-xl box-border select-none'
            >
              <div className='w-full flex flex-col gap-2'>
                <h3 className='text-3xl lg:text-[36px] font-bold text-[#FFFFFF] tracking-tight leading-tight'>
                  Let’s talk it through
                </h3>
                <p className='text-[#FFFFFF] text-lg font-semibold leading-snug'>
                  book a free consultation with our team.
                </p>
              </div>

              <div className='w-full h-[154px] rounded-2xl overflow-hidden'>
                <img
                  src={consultationImg}
                  alt='Team Consultation Meeting'
                  className='w-full h-full object-cover'
                />
              </div>

              <button className='w-full mt-auto bg-white text-black font-bold py-4 px-6 rounded-2xl text-center hover:bg-neutral-100 transition-colors duration-300 font-body text-sm lg:text-base shadow-sm cursor-pointer outline-none'>
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
