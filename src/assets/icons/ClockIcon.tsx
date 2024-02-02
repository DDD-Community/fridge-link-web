import React from 'react';

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"{...props}>
        <path fill-rule="evenodd" fill={props.fill ? "current" : "#B5B9C5"} clip-rule="evenodd" d="M14.6667 8.50016C14.6667 12.1821 11.6819 15.1668 8.00004 15.1668C4.31814 15.1668 1.33337 12.1821 1.33337 8.50016C1.33337 4.81826 4.31814 1.8335 8.00004 1.8335C11.6819 1.8335 14.6667 4.81826 14.6667 8.50016ZM8.66673 4.5C8.66673 4.13181 8.36825 3.83333 8.00006 3.83333C7.63187 3.83333 7.33339 4.13181 7.33339 4.5V8.5C7.33339 8.62495 7.36851 8.74738 7.43473 8.85333L9.1014 11.52C9.29654 11.8322 9.70784 11.9271 10.0201 11.732C10.3323 11.5369 10.4272 11.1256 10.2321 10.8133L8.66673 8.3088V4.5Z" />
    </svg>
);

export default ClockIcon;