import React from 'react';
import PropTypes from 'prop-types';

import './Input.css'

const Input = ({ label, hint }) => (
  <div className="input__form-inputs">
    <label htmlFor="valueSale" className="input__subtitle">
      {label}
      <strong>*</strong>
    </label>
    <input className="input__inputs" />
    <span className="input__hint-description">{hint}</span>
  </div>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
};

export default Input;
