import React from 'react';

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke={props.fill ? "current" : '#9299AA'}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M17.5002 17.4998L13.9169 13.9165"
            stroke={props.fill ? "current" : '#9299AA'}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SearchIcon;