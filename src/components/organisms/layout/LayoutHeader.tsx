import React from 'react';
import Link from 'next/link';

interface LayoutHeaderProps {
  title: string;
  linkTo?: string;
}

const LayoutHeader: React.FC<LayoutHeaderProps> = ({ title, linkTo }) => {
  return (
    <div className="h-48">
      <div>history</div>
      <div>{title}</div>
      {linkTo != null && <Link href={linkTo}>설정</Link>}
    </div>
  );
};

export default LayoutHeader;
