// App.js

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WebCalc from './components/wCalc';
import WebHeader from './components/wHeader';
import WebHome from './components/wHome';
import WebQuote from './components/wQuote';

function App() {
  return (
    <div className="container">
      <WebHeader />
      <Routes>
        <Route exact path="/" element={<WebHome />} />
        <Route path="/WebCalc" element={<WebCalc />} />
        <Route path="/WebQuote" element={<WebQuote />} />
      </Routes>
    </div>
  );
}

export default App;
