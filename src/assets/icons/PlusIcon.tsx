import React from 'react';

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1159 2.74091C11.1159 2.26268 10.7282 1.875 10.25 1.875C9.77177 1.875 9.38409 2.26268 9.38409 2.74091V9.13409H2.99091C2.51268 9.13409 2.125 9.52177 2.125 10C2.125 10.4782 2.51268 10.8659 2.99091 10.8659H9.38409V17.2591C9.38409 17.7373 9.77177 18.125 10.25 18.125C10.7282 18.125 11.1159 17.7373 11.1159 17.2591V10.8659H17.5091C17.9873 10.8659 18.375 10.4782 18.375 10C18.375 9.52177 17.9873 9.13409 17.5091 9.13409H11.1159V2.74091Z"
            fill={props.fill ? "current" : "#CCCFD7"}
        />
    </svg>
);
export default PlusIcon;