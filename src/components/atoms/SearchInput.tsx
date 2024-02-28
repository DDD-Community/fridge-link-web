import React from 'react';
import { SearchIcon } from '@/assets/icons';

interface SearchInputProps {
  searchKeyword?: string;
  onChange?: () => void;
  onClick?: () => void;
  className?: string;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchKeyword, onClick, placeholder, onChange, className }) => {
  return (
    <div
      className={`flex items-center justify-center w-full bg-gray1 text-white p-18 gap-12 rounded-12 heading4-semibold ${className}`}
    >
      <input className="w-full bg-gray1 text" placeholder={placeholder} onChange={onChange} value={searchKeyword} />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
