import React from 'react';

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.3938 3.16216L5.02294 6.7913L10.6062 1.20801" stroke={props.stroke ? 'current' : '#F1F2F4'} strokeWidth="1.67" strokeLinecap="round"/>
  </svg>
);
export default CheckIcon;

