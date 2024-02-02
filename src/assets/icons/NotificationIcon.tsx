import React from 'react';

const NotificationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <g clip-path="url(#clip0_1100_16324)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9967 1.04762C11.9967 0.469035 11.5276 0 10.949 0C10.3705 0 9.90142 0.469035 9.90142 1.04762V2.16986C6.34749 2.6781 3.6155 5.73448 3.6155 9.42896V13.6191L3.61534 13.6193L3.6152 13.6194L2.38834 16.0731C1.9894 16.871 2.56959 17.8098 3.46165 17.8098H18.4355C19.3276 17.8098 19.9078 16.871 19.5088 16.0731L18.4089 13.8732C18.3255 13.7066 18.2822 13.5228 18.2822 13.3365V9.42896C18.2822 5.73463 15.5504 2.67834 11.9967 2.16992V1.04762Z"
        fill={props.fill ? 'current' : '#9299AA'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75964 18.8564C7.22461 20.6642 8.86544 21.9999 10.8183 21.9999C12.7711 21.9999 14.4119 20.6642 14.8769 18.8564H6.75964Z"
        fill={props.fill ? 'current' : '#9299AA'}
      />
    </g>
    <defs>
      <clipPath id="clip0_1100_16324">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default NotificationIcon;
