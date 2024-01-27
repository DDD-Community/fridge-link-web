import React from 'react';

const FreezerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 1C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1H3ZM10.7501 5.84619V5.09619H9.25009V5.84619V8.55153L6.97251 7.09204L6.34104 6.68738L5.53174 7.95033L6.16321 8.35498L8.62149 9.93027L6.17974 11.5314L5.55256 11.9427L6.37509 13.197L7.00227 12.7858L9.25009 11.3118V14V14.75H10.7501V14V11.2943L13.0284 12.7543L13.6599 13.1589L14.4692 11.896L13.8377 11.4913L11.3791 9.91578L13.8209 8.31461L14.4481 7.90334L13.6255 6.64897L12.9983 7.06023L10.7501 8.53448V5.84619Z"
            fill={props.fill ? "current" : '#3CAA8D'}
        />
    </svg>
);

export default FreezerIcon;