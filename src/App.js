import React, { useState } from 'react';
import  './App.css';
import { Calculator } from './Components/Calculator';
const App = () => {
  const [result, setResult] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operator, setOperator] = useState('');

  const handleNumberClick = (e) => {
    const value = parseInt(e.target.value);
    if (operator === '') {
      setValue1(value1 * 10 + value);
      setResult(value1 * 10 + value);
    } else {
      setValue2(value2 * 10 + value);
      setResult(value2 * 10 + value);
    }
  };

  const handleOperatorClick = (e) => {
    const value = e.target.value;
    if (value === '=') {
      if (operator === '+') {
        setResult(value1 + value2);
      } else if (operator === '-') {
        setResult(value1 - value2);
      } else if (operator === '*') {
        setResult(value1 * value2);
      } else if (operator === '/') {
        setResult(value1 / value2);
      }
      setValue1(result);
      setValue2(0);
      setOperator('');
    } else {
      setOperator(value);
    }
  };

  const handleClearClick = () => {
    setResult(0);
    setValue1(0);
    setValue2(0);
    setOperator('');
  };

  return (
    <div className='container'>
      <h1 className='header'>Simple Calculator</h1>
     <Calculator handleClearClick={handleClearClick} handleOperatorClick={handleOperatorClick} handleNumberClick={handleNumberClick} result={result}/>
    </div>
  );
};

export default App;
