// theme.ts
import { createTheme, Theme } from '@mui/material/styles';

// Define your theme interface
interface CustomThemeOptions {
  mode: 'light' | 'dark';
}

export interface CustomTheme extends Theme {
  custom: CustomThemeOptions;
}

// Create your theme
const theme = createTheme({
    palette: {
      mode: 'dark', // You can set the default mode here
        primary: {
        main: '#28AE60', // Set your primary color here
    },
        // You can customize other palette colors as needed
  },
});

export default theme;