import React from 'react';

const AngleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6446 1.41789C15.0351 1.80842 15.0351 2.44158 14.6446 2.83211L7.47671 10L14.6446 17.1679C15.0351 17.5584 15.0351 18.1916 14.6446 18.5821C14.2541 18.9726 13.6209 18.9726 13.2304 18.5821L4.64828 10L13.2304 1.41789C13.6209 1.02737 14.2541 1.02737 14.6446 1.41789Z"
            fill={props.fill ? "current" : '#CCCFD7'}
        />
    </svg>
);

export default AngleIcon;