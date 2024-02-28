import React from 'react';
import { Switch } from '@chakra-ui/react';

const Toggle: React.FC<{
  isToggleOn?: boolean;
  onClick?: () => void;
}> = ({ isToggleOn, onClick }) => {
  return <Switch colorScheme="primary2" isChecked={isToggleOn} onChange={onClick} />;
};

export default Toggle;
