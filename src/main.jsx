import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/app.scss';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#A445ED',
    },
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
