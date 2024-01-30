import React from 'react';

const BoxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.25 3.0251C1.25 2.03099 2.05589 1.2251 3.05 1.2251H17.45C18.4441 1.2251 19.25 2.03099 19.25 3.0251V5.7251H1.25V3.0251Z"
            fill={props.fill ? "current" : '#3CAA8D'}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5506 18.775C17.5447 18.775 18.3506 17.969 18.3506 16.975V7.07495H2.15063V16.975C2.15063 17.969 2.95654 18.775 3.95063 18.775H16.5506ZM7.38189 8.98745C6.82268 8.98745 6.36938 9.44097 6.36938 9.99995C6.36938 10.5589 6.82268 11.0125 7.38189 11.0125H13.1194C13.6786 11.0125 14.1319 10.5589 14.1319 9.99995C14.1319 9.44097 13.6786 8.98745 13.1194 8.98745H7.38189Z"
            fill={props.fill ? "current" : '#3CAA8D'}
        />
    </svg>
);

export default BoxIcon;