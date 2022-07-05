// App.js

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WebCalc from './components/wCalc';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<WebCalc />} />
      </Routes>
    </div>
  );
}

export default App;
