/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './Calculator.css'

import Input from '../Input/Input'
import Result from '../Result/Result'

function Calculator() {
  return (
    <div className="main_container">
      <div className="column">
        <header>
          <h1 className="calculator__title">Simule sua Antecipação</h1>
        </header>
        <Input />
      </div>
      <div className="column2">
        <Result />
      </div>
    </div>
  );
}

export default Calculator;
