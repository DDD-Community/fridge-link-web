import React from 'react';

const FridgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_213_3007)">
            <rect
                x="0.833656"
                y="0.83316"
                width="8.33333"
                height="8.33333"
                rx="1.66667"
                fill={props.fill ? "current" : '#CCCFD7'}
            />
            <rect
                x="0.833656"
                y="10.8332"
                width="8.33333"
                height="8.33333"
                rx="1.66667"
                fill={props.fill ? "current" : '#CCCFD7'}
            />
            <rect
                x="10.8337"
                y="0.83316"
                width="8.33333"
                height="8.33333"
                rx="1.66667"
                fill={props.fill ? "current" : '#CCCFD7'}
            />
            <rect
                x="10.8337"
                y="10.8332"
                width="8.33333"
                height="8.33333"
                rx="1.66667"
                fill={props.fill ? "current" : '#CCCFD7'}
            />
        </g>
        <defs>
            <clipPath id="clip0_213_3007">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default FridgeIcon;