import React from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    center: {
      container: 'text-center items-center mx-auto',
      text: 'text-center justify-center',
    },
    left: {
      container: 'text-left items-start mr-auto',
      text: 'text-left justify-start',
    },
    right: {
      container: 'text-right items-end ml-auto',
      text: 'text-right justify-end',
    },
  };

  return (
    <div
      className={`w-full max-w-[1160px] gap-[11px] flex flex-col mb-6 lg:mb-16 ${alignClasses[align].container} ${className}`}
    >
      <h2
        className={`font-bold text-[28px] lg:text-[40px] lg:w-[1160px] lg:h-[56px] flex items-center text-neutral-25 leading-none tracking-tight ${alignClasses[align].text}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm lg:text-lg font-medium lg:w-[1160px] lg:h-[32px] flex items-center text-neutral-400 leading-none max-w-full ${alignClasses[align].text}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
