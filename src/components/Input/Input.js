/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './Input.css'

function Input() {
  return (
    <form action="" className="input__form">
      <div className="input__form-inputs">
        <label htmlFor="valueSale" className="input__subtitle">Informe o valor da venda
          <strong>*</strong>
        </label>
        <input type="number" className="input__inputs" />
      </div>
    </form>
  );
}

export default Input;
