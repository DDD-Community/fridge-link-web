import React from 'react';

const Header: React.FC<{
  headerLeft?: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  headerTitle?: string;
  headerRight?: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  transparent?: boolean;
}> = ({ headerLeft, headerTitle, headerRight, transparent = false }) => {
  return (
    <div
      className={`flex justify-center items-center fixed top-0 w-screen max-w-[480px] py-[12px] px-[20px] z-[1000]  ${transparent ? '' : 'bg-gray1'}`}
    >
      {headerLeft ?? (
        <div
          onClick={() => {
            window.history.back();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.6446 1.41789C15.0351 1.80842 15.0351 2.44158 14.6446 2.83211L7.47671 10L14.6446 17.1679C15.0351 17.5584 15.0351 18.1916 14.6446 18.5821C14.2541 18.9726 13.6209 18.9726 13.2304 18.5821L4.64828 10L13.2304 1.41789C13.6209 1.02737 14.2541 1.02737 14.6446 1.41789Z"
              fill={transparent ? '#FFFFFF' : '#363A45'}
            />
          </svg>
        </div>
      )}
      <div className="flex justify-center text-center w-full">
        <p className="heading3-bold text-gray8 pt-1">
          {typeof headerTitle === 'string' ? headerTitle : ''}
        </p>
      </div>
      {headerRight ?? <div className="w-7" />}
    </div>
  );
};

export default Header;
