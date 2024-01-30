import React from 'react';

const PolicyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.98501 20.1523H17.9631C18.9772 20.1523 19.8 19.3813 19.8 18.4302V3.56983C19.8 2.6187 18.9772 1.84766 17.9631 1.84766H7.98501V20.1523ZM6.31501 1.84766H4.03693C3.02286 1.84766 2.20001 2.6187 2.20001 3.56983V18.4302C2.20001 19.3813 3.02286 20.1523 4.03693 20.1523H6.31501V1.84766Z"
      fill={props.fill ? 'current' : '#9299AA'}
    />
  </svg>
);

export default PolicyIcon;
