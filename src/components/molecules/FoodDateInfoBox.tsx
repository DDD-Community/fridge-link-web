import React from 'react';

interface FoodDateInfoBoxProps {
  svgComponent: React.ReactNode;
  name: string;
}

const FoodDateInfoBox: React.FC<FoodDateInfoBoxProps> = ({
  svgComponent,
  name,
}) => {
  return (
    <div className="">
      <div>NOW</div>
      <div>{name}</div>
    </div>
  );
};

export default FoodDateInfoBox;
