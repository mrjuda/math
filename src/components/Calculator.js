// Calculator.js
/* eslint-disable */

import React from 'react';
import calculate from './logic/calculate';
import './styles/Calculator.css';

const Calc = () => {
  const [state, setState] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnClick = (e) => {
    const { value } = e.target;
    const { total, next, operation } = calculate(state, value);
    setState({ total, next, operation });

    const result = document.getElementById('calcDisplay');

    if (next !== null) {
      result.innerHTML = next;
    } else if (total !== null) {
      result.innerHTML = total;
    } else {
      result.innerHTML = '0';
    }
  };

  return (
    <div className="calc-container">
      <h1>Here goes the calculator</h1>
    </div>
  );
};

export default Calc;
