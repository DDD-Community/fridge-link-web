import React from 'react';

const CircleCloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" {...props}>
        <circle cx="9.49998" cy="9.50133" r="8.68785" fill={props.fill ? 'current' : '#363A45'} />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.7426 6.16159C13.9924 5.91188 13.9924 5.50701 13.7426 5.25729C13.4929 5.00757 13.0881 5.00757 12.8383 5.25729L9.5 8.59563L6.16166 5.25729C5.91195 5.00757 5.50708 5.00757 5.25736 5.25729C5.00764 5.50701 5.00764 5.91188 5.25736 6.16159L8.5957 9.49993L5.25736 12.8383C5.00764 13.088 5.00764 13.4929 5.25736 13.7426C5.50708 13.9923 5.91195 13.9923 6.16166 13.7426L9.5 10.4042L12.8383 13.7426C13.0881 13.9923 13.4929 13.9923 13.7426 13.7426C13.9924 13.4929 13.9924 13.088 13.7426 12.8383L10.4043 9.49993L13.7426 6.16159Z" fill="white" />
    </svg>
);

export default CircleCloseIcon;