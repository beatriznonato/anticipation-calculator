import React from 'react';

import './Calculator.css'

import Input from '../Input/Input'
import Result from '../Result/Result'

const Calculator = () => (
  <div className="main_container">
    <div className="column">
      <header>
        <h1 className="calculator__title">Simule sua Antecipação</h1>
      </header>
      <form action="" className="input__form">
        <Input label="banana"/>
        <Input label="abacaxi"/>
        <Input label="morango"/>
      </form>
    </div>
    <div className="column2">
      <div className="calculator__result">
        <h2 className="calculator__subtitle">Você receberá:</h2>
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
    </div>
  </div>
)

export default Calculator;
