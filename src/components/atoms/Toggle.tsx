import React from 'react';
import { extendTheme, ThemeProvider, CSSReset, Switch } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    primary2: {
      500: '#3CAA8D',
    },
  },
});

const Toggle: React.FC<{
  isToggleOn?: boolean;
  onClick?: () => void;
}> = ({ isToggleOn, onClick }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Switch
        colorScheme="primary2"
        isChecked={isToggleOn}
        onChange={onClick}
      />
    </ThemeProvider>
  );
};

export default Toggle;
