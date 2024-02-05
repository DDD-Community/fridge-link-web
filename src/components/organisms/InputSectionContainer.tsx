import React from 'react';

const InputSectionContainer: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className }) => {
  return (
    <section className={className ?? ''}>
      <p className="heading4-semibold text-gray8">{title}</p>
      {children}
    </section>
  );
};

export default InputSectionContainer;
