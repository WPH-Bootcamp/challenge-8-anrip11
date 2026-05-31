import React from 'react';
import successImg from '../../assets/succes-message.png';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fadeIn select-none'>
      <div className='w-full max-w-[518px] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 rounded-3xl p-6 lg:p-10 flex flex-col items-center text-center shadow-2xl transition-colors duration-500'>
        <div className='w-[228px] h-[228px] flex items-center justify-center mb-6'>
          <img
            src={successImg}
            alt='Message Received Success'
            className='w-full h-full object-contain pointer-events-none'
          />
        </div>

        <h3 className='text-xl font-bold font-body tracking-tight mb-3 text-neutral-950 dark:text-white transition-colors duration-500'>
          Message Received!
        </h3>

        <p className='text-md font-medium font-body leading-relaxed max-w-[400px] mb-8 text-neutral-600 dark:text-neutral-400 transition-colors duration-500'>
          Thanks for reaching out — we’ll get back to you as soon as possible.
        </p>

        <button
          onClick={onClose}
          className='w-full max-w-[261px] h-[48px] bg-primary-200 text-white font-bold text-md rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary-200/90 cursor-pointer outline-none shadow-md font-body'
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
