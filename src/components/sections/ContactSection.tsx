import React, { useState } from 'react';
import { contactOptions } from '../../data/contact-data';
import { SuccessModal } from '../ui/SuccessModal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'web-dev',
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Submitted Data:', { ...formData, services: selectedServices });

    setIsModalOpen(true);

    setFormData({ name: '', email: '', message: '' });
    setSelectedServices(['web-dev']);
  };

  return (
    <>
      <section
        id='ContactSection'
        className='w-full bg-white dark:bg-black font-body py-16 lg:py-[100px] overflow-hidden transition-colors duration-500'
      >
        <div className='max-w-[393px] lg:max-w-[1440px] mx-auto px-6 lg:px-[140px]'>
          <div className='text-center mb-12 lg:mb-16'>
            <h2 className='text-3xl lg:text-[44px] font-bold text-black dark:text-[#FDFDFD] tracking-tight leading-tight mb-4 transition-colors duration-500'>
              Ready to Start? Let’s Talk.
            </h2>
            <p className='text-neutral-600 dark:text-[#A4A7AE] text-sm lg:text-base font-medium max-w-[480px] mx-auto leading-relaxed transition-colors duration-500'>
              Tell us what you need, and we’ll get back to you soon.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className='w-full lg:max-w-[680px] mx-auto flex flex-col gap-6'
          >
            <div className='flex flex-col w-full gap-2'>
              <label className='text-sm font-bold text-neutral-900 dark:text-[#FDFDFD] tracking-wide transition-colors duration-500'>
                Name
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Enter your name'
                required
                className='w-full bg-neutral-50 dark:bg-[#0D0E12] text-black dark:text-white placeholder-neutral-400 dark:placeholder-[#4B5563] text-sm lg:text-base font-medium rounded-xl border border-neutral-200 dark:border-[#181D27] py-4 px-5 outline-none transition-colors duration-300 focus:border-[#FF623E] dark:focus:border-[#FF623E]'
              />
            </div>

            <div className='flex flex-col w-full gap-2'>
              <label className='text-sm font-bold text-neutral-900 dark:text-[#FDFDFD] tracking-wide transition-colors duration-500'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter your email'
                required
                className='w-full bg-neutral-50 dark:bg-[#0D0E12] text-black dark:text-white placeholder-neutral-400 dark:placeholder-[#4B5563] text-sm lg:text-base font-medium rounded-xl border border-neutral-200 dark:border-[#181D27] py-4 px-5 outline-none transition-colors duration-300 focus:border-[#FF623E] dark:focus:border-[#FF623E]'
              />
            </div>

            <div className='flex flex-col w-full gap-2'>
              <label className='text-sm font-bold text-neutral-900 dark:text-[#FDFDFD] tracking-wide transition-colors duration-500'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder='Enter your message'
                required
                rows={5}
                className='w-full bg-neutral-50 dark:bg-[#0D0E12] text-black dark:text-white placeholder-neutral-400 dark:placeholder-[#4B5563] text-sm lg:text-base font-medium rounded-xl border border-neutral-200 dark:border-[#181D27] py-4 px-5 outline-none resize-none transition-colors duration-300 focus:border-[#FF623E] dark:focus:border-[#FF623E]'
              />
            </div>

            <div className='flex flex-col w-full gap-4 mt-2'>
              <label className='text-sm font-bold text-neutral-900 dark:text-[#FDFDFD] tracking-wide transition-colors duration-500'>
                Services
              </label>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full'>
                {contactOptions.map((option) => {
                  const isChecked = selectedServices.includes(option.id);

                  return (
                    <label
                      key={option.id}
                      onClick={() => handleServiceToggle(option.id)}
                      className='flex items-center gap-3 cursor-pointer select-none group w-fit'
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-all duration-300 border ${
                          isChecked
                            ? 'bg-[#FF623E] border-[#FF623E]'
                            : 'bg-neutral-50 border-neutral-200 dark:bg-[#0D0E12] dark:border-[#181D27] group-hover:border-[#FF623E]/50'
                        }`}
                      >
                        {isChecked && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={3}
                            stroke='white'
                            className='w-3 h-3'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M4.5 12.75l6 6 9-13.5'
                            />
                          </svg>
                        )}
                      </div>

                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isChecked
                            ? 'text-black dark:text-white'
                            : 'text-neutral-600 group-hover:text-black dark:text-[#A4A7AE] dark:group-hover:text-white'
                        }`}
                      >
                        {option.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-[#FF623E] text-white font-bold py-4 px-6 rounded-full text-center mt-6 hover:bg-[#e05333] transition-colors duration-300 shadow-md cursor-pointer outline-none font-body text-base'
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
