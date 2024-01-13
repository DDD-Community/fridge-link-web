import React from 'react';

interface DateBoxProps {
  day: number;
}

const DateBox: React.FC<DateBoxProps> = ({ day }) => {
  return <div className="">D - {day}</div>;
};

export default DateBox;
