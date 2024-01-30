import React from 'react';

const DotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3"
        height="4"
        viewBox="0 0 3 4"
        fill="none"
        {...props}
    >
        <circle cx="1.5" cy="2" r="1.5" fill={props.fill ? "current" : "#000000"} />
    </svg>

);
export default DotIcon;