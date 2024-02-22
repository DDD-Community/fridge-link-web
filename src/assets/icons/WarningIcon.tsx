import React from 'react';

const WarningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
  <path fill={props.fill ? "current" : '#FB2414'} fillRule="evenodd" clipRule="evenodd" d="M12 6C12 9.31348 9.3137 12 6 12C2.6863 12 0 9.31348 0 6C0 2.68652 2.6863 0 6 0C9.3137 0 12 2.68652 12 6ZM6 2.6168C6.27671 2.6168 6.50101 2.84121 6.50101 3.11777V6.30527C6.50101 6.58184 6.27671 6.80625 6 6.80625C5.72329 6.80625 5.49899 6.58184 5.49899 6.30527V3.11777C5.49899 2.84121 5.72329 2.6168 6 2.6168ZM6 8.88223C6.27667 8.88223 6.50098 8.65781 6.50098 8.38125C6.50098 8.10469 6.27667 7.88027 6 7.88027C5.72329 7.88027 5.49899 8.10469 5.49899 8.38125C5.49899 8.65781 5.72329 8.88223 6 8.88223Z" />
  </svg>
);

export default WarningIcon;