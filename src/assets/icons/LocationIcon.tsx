import React from 'react';

const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.76996 12.5791C6.45421 13.2776 7.54604 13.2776 8.23028 12.5791C9.78198 10.995 12.2501 8.07121 12.2501 5.5C12.2501 2.60051 9.89962 0.25 7.00012 0.25C4.10063 0.25 1.75012 2.60051 1.75012 5.5C1.75012 8.07121 4.21827 10.995 5.76996 12.5791ZM7.00012 7.69998C8.15992 7.69998 9.10012 6.75977 9.10012 5.59998C9.10012 4.44018 8.15992 3.49998 7.00012 3.49998C5.84032 3.49998 4.90012 4.44018 4.90012 5.59998C4.90012 6.75977 5.84032 7.69998 7.00012 7.69998Z"
            fill={props.fill ? "current" : '#3CAA8D'}
        />
    </svg>
);

export default LocationIcon;