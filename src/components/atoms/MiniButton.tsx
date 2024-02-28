import React, { useMemo } from 'react';

const MiniButton: React.FC<{
  variant: 'active' | 'disable' | 'clickable';
  label: string;
  onClick: () => void;
}> = ({ variant, label, onClick }) => {
  const style = useMemo(() => {
    switch (variant) {
      case 'active':
        return 'bg-primary2 text-white';
      case 'disable':
        return 'bg-white border border-gray3 text-gray3';
      default:
        return 'bg-white border border-primary2 text-primary2';
    }
  }, []);

  return (
    <button disabled={variant === 'disable'} onClick={onClick} className={`px-[16px] py-[10px] rounded-[6px] ${style}`}>
      {label}
    </button>
  );
};

export default MiniButton;
