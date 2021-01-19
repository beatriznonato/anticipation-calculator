import React from 'react';

import './Result.css'

function Result() {
  return (
    <div className="result">
      <h2 className="result__title">Você receberá:</h2>
      <p className="result__text">Amanhã: <strong className="result__value">R$ 0,00</strong></p>
      <p className="result__text">Em 15 dias: <strong className="result__value">R$ 0,00</strong></p>
      <p className="result__text">Em 30 dias: <strong className="result__value">R$ 0,00</strong></p>
      <p className="result__text">Em 90 dias: <strong className="result__value">R$ 0,00</strong></p>
    </div>
  );
}

export default Result;
