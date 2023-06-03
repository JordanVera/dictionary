import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/theme.css';
import '@theme-toggles/react/css/within.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
