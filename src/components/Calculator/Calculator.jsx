import React, { useState } from 'react';

import './Calculator.css'

import Input from '../Input/Input'
import Result from '../Result/Result'
import post from '../../services/api'


const Calculator = () => {
  const [salePrice, setSalePrice] = useState('')
  const [installment, setInstallment] = useState('')
  const [percentage, setPercentage] = useState('')

  const handleSubmit =  async (event) => {
    event.preventDefault()

    const api = await post()

    console.log(api)
  }


  return (
    <div className="main_container">
      <div className="column">
        <header>
          <h1 className="calculator__title">Simule sua Antecipação</h1>
        </header>
        <form action="" className="input__form" onSubmit={handleSubmit}>
          <Input label="Informe o valor da venda" value={salePrice} onChange={e => setSalePrice(e.target.value)} />
          <Input label="Em quantas parcelas" hint="Máximo de 12 parcelas" value={installment} onChange={e => setInstallment(e.target.value)}/>
          <Input label="Informe o percentual de MDR" value={percentage} onChange={e => setPercentage(e.target.value)}/>
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
}

export default Calculator;
