import React from 'react';

const ExclamationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 7.5C14 11.3657 10.866 14.5 7 14.5C3.13402 14.5 0 11.3657 0 7.5C0 3.63428 3.13402 0.5 7 0.5C10.866 0.5 14 3.63428 14 7.5ZM7 3.55293C7.32283 3.55293 7.58452 3.81475 7.58452 4.1374V7.85615C7.58452 8.17881 7.32283 8.44062 7 8.44062C6.67717 8.44062 6.41548 8.17881 6.41548 7.85615V4.1374C6.41548 3.81475 6.67717 3.55293 7 3.55293ZM7 10.8626C7.32278 10.8626 7.58447 10.6008 7.58447 10.2781C7.58447 9.95547 7.32278 9.69365 7 9.69365C6.67717 9.69365 6.41548 9.95547 6.41548 10.2781C6.41548 10.6008 6.67717 10.8626 7 10.8626Z"
      fill={props.fill ? 'current' : '#FB2414'}
    />
  </svg>
);

export default ExclamationIcon;
