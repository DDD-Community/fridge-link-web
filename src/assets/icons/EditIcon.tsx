import React from 'react';

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.98597 2.78906L0.88774 9.88728L0.946665 12.3032L3.36261 12.3622L10.4608 5.26393L7.98597 2.78906ZM11.1679 4.55682L12.4371 3.28762C12.6324 3.09236 12.6324 2.77578 12.4371 2.58051L10.6694 0.812748C10.4741 0.617485 10.1575 0.617486 9.96228 0.812747L8.69307 2.08195L11.1679 4.55682Z"
            fill={props.fill ? "current" : "#000000"}
        />
    </svg>

);
export default EditIcon;