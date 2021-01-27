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
        <Input label="Informe o valor da venda"/>
        <Input label="Em quantas parcelas"/>
        <Input label="Informe o percentual de MDR"/>
      </form>
    </div>
    <div className="column2">
      <div className="calculator__result">
        <h2 className="calculator__subtitle">Você receberá:</h2>
        <Result days="Amanhã" value="0,00"/>
        <Result days="Em 15 dias" value="0,00"/>
        <Result days="Em 30 dias" value="0,00"/>
        <Result days="Em 90 dias" value="0,00"/>
      </div>
    </div>
  </div>
)

export default Calculator;
