import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'; //Navigate
import Layout from './Layout';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './muiTheme';


// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// })


const App: React.FC =()=> {
  return (
    <ThemeProvider theme={theme}>
       {/* <CssBaseline /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}/>
          </Routes>
        </BrowserRouter>
      


    </ThemeProvider >
  );
}

export default App;
