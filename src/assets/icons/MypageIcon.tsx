import React from 'react';

const MypageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        {...props}
    >
        <g clipPath="url(#clip0_213_3003)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM12.779 7.22079C12.779 8.7557 11.5347 10 9.99976 10C8.46484 10 7.22054 8.7557 7.22054 7.22079C7.22054 5.68587 8.46484 4.44157 9.99976 4.44157C11.5347 4.44157 12.779 5.68587 12.779 7.22079ZM5.44153 14.7291C5.83238 12.5666 7.7244 10.9264 9.99954 10.9264C12.2747 10.9264 14.1667 12.5666 14.5575 14.7291C14.6394 15.182 14.2585 15.5584 13.7982 15.5584H6.20085C5.74061 15.5584 5.35967 15.182 5.44153 14.7291Z"
                fill={props.fill ? "current" : '#CCCFD7'}
            />
        </g>
        <defs>
            <clipPath id="clip0_213_3003">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default MypageIcon;