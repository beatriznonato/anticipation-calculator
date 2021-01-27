import React from 'react';
import PropTypes from 'prop-types';

import './Input.css'

const Input = ({ label }) => (
  <div className="input__form-inputs">
    <label htmlFor="valueSale" className="input__subtitle">
      {label}
      <strong>*</strong>
    </label>
    <input className="input__inputs" />
  </div>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
