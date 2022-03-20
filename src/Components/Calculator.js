import React, { useEffect } from 'react'
import {useState} from 'react';
export const Calculator = () => {

  const [calc, setCalc] = useState("");
  const [ans, setAns] = useState("");

  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = (value) => {

    if (
      ops.includes(value) && calc === '' || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }

    setCalc(calc + value);
  }

  const createDigits = () => {
    const digits = []

    for(let i=1; i<10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} 
        key={i}>
          {i}
        </button>
      )
    }

    return digits
  }

  const calculate = () => {
    setCalc(eval(calc).toString(), setAns(eval(calc).toString()));
    
  }

  const deleteLast = () => {
    if(calc === ''){
      return;
    }

    const value = calc.slice(0, -1);
    
    setCalc(value);
  }

  const deleteAll = () => {
    setCalc('');
  }

  const showAns = () => {
      setCalc(ans)
  }

  return (
    <div className="calculator">
        <div className="display">
          { calc || '0' }
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
          <button onClick={deleteAll}>RESET</button>
          <button onClick={showAns}>ANS</button>
        </div>

        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          
          <button onClick={calculate}>=</button>
        </div>

    </div>
  )
}
