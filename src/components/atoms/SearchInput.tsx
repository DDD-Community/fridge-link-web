import React from 'react';

interface SearchInputProps {
  searchKeyword: string;
  onChangeHandler: () => void;
  onClickHandler: () => void;
  className: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchKeyword,
  onClickHandler,
  onChangeHandler,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full bg-primary2 text-white p-18 gap-12 rounded-12 heading4-semibold ${className}`}
    >
      <input onChange={onChangeHandler} value={searchKeyword} />
    </div>
  );
};

export default SearchInput;
