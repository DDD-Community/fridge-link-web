import React from 'react';

const DateIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 3H14.25C15.0784 3 15.75 3.67157 15.75 4.5V6.75H2.25V4.5C2.25 3.67157 2.92157 3 3.75 3ZM2.25 8.25V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V8.25H2.25Z" fill={props.fill ? "current" : '#B5B9C5'} />
        <path d="M12 1.5V4.5" stroke={props.stroke ? "current" : '#B5B9C5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 1.5V4.5" stroke={props.stroke ? "current" : '#B5B9C5'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default DateIcon;