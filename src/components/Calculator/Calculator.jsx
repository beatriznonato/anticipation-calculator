import React, { useEffect, useState } from 'react'
import Input from '../Input/Input'
import Result from '../Result/Result'
import post from '../../services/api'
import format from '../../services/format'
import './Calculator.css'

const Calculator = () => {
  const [amount, setAmount] = useState('')
  const [installments, setInstallments] = useState('')
  const [mdr, setMdr] = useState('')
  const [reward, setReward] = useState([])

  useEffect(async () => {
    if (amount && installments && mdr) {
      const data = await post({
        amount,
        installments,
        mdr,
      })

      Object.keys(data).forEach(key => {
        data[key] = format(data[key])
      })

      setReward(data)
    }
  }, [amount, installments, mdr])

  return (
    <div className="main_container">
      <div className="column">
        <header>
          <h1 className="calculator__title">Simule sua Antecipação</h1>
        </header>
        <form action="" className="input__form">
          <Input
            label="Informe o valor da venda"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <Input
            label="Em quantas parcelas"
            hint="Máximo de 12 parcelas"
            value={installments}
            onChange={e => setInstallments(e.target.value)}
          />
          <Input
            label="Informe o percentual de MDR"
            value={mdr}
            onChange={e => setMdr(e.target.value)}
          />
        </form>
      </div>
      <div className="column2">
        <div className="calculator__result">
          <h2 className="calculator__subtitle">VOCÊ RECEBERÁ:</h2>
          <Result days="Amanhã" value={reward[1]} />
          <Result days="Em 15 dias" value={reward[15]} />
          <Result days="Em 30 dias" value={reward[30]} />
          <Result days="Em 90 dias" value={reward[90]} />
        </div>
      </div>
    </div>
  )
}

export default Calculator;
