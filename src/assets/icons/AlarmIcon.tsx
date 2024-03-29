import React from 'react';
const AlarmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_201_3609)">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.0873 1.14286C13.0873 0.511675 12.5756 0 11.9444 0C11.3132 0 10.8016 0.511675 10.8016 1.14286V2.36712C6.92455 2.92157 3.9442 6.2558 3.9442 10.2861V14.8573L3.94403 14.8574L3.94387 14.8575L2.52654 17.6922C2.12759 18.4901 2.70779 19.4289 3.59985 19.4289H20.288C21.1801 19.4289 21.7602 18.4901 21.3613 17.6922L20.0709 15.1114C19.9876 14.9447 19.9442 14.761 19.9442 14.5747V10.2861C19.9442 6.25596 16.9641 2.92183 13.0873 2.36718V1.14286Z" fill={props.fill ? "current" : "#CCCFD7"} />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.37418 20.571C7.88141 22.543 9.67141 24.0003 11.8018 24.0003C13.9321 24.0003 15.7221 22.543 16.2294 20.571H7.37418Z" fill={props.fill ? "current" : "#CCCFD7"} />
        </g>
        <defs>
            <clipPath id="clip0_201_3609">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>

);

export default AlarmIcon;