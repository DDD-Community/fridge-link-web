import React from 'react';

const QuestionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.67 2.29688C2.74768 2.29688 2 3.04456 2 3.96687V16.8754C2 17.7978 2.74768 18.5454 3.67 18.5454H17.3606L19.4909 20.6166C19.681 20.8015 20 20.6668 20 20.4015V3.96687C20 3.04456 19.2523 2.29688 18.33 2.29688H3.67ZM6.98293 11.2036C7.59913 11.2036 8.09866 10.7041 8.09866 10.0879C8.09866 9.4717 7.59913 8.97217 6.98293 8.97217C6.36672 8.97217 5.86719 9.4717 5.86719 10.0879C5.86719 10.7041 6.36672 11.2036 6.98293 11.2036ZM12.1153 10.0879C12.1153 10.7041 11.6158 11.2036 10.9996 11.2036C10.3834 11.2036 9.88385 10.7041 9.88385 10.0879C9.88385 9.4717 10.3834 8.97217 10.9996 8.97217C11.6158 8.97217 12.1153 9.4717 12.1153 10.0879ZM15.0162 11.2036C15.6324 11.2036 16.132 10.7041 16.132 10.0879C16.132 9.4717 15.6324 8.97217 15.0162 8.97217C14.4 8.97217 13.9005 9.4717 13.9005 10.0879C13.9005 10.7041 14.4 11.2036 15.0162 11.2036Z"
      fill={props.fill ? 'current' : '#9299AA'}
    />
  </svg>
);

export default QuestionIcon;