import React from 'react';
import PropTypes from 'prop-types';

import './Input.css'

const Input = ({ label, hint, value, onChange }) => (
  <div className="input__form-inputs">
    <label htmlFor="valueSale" className="label__description">
      {label}
      <strong>*</strong>
    </label>
    <input type="number" className="input__box" value={value} onChange={onChange} />
    <span className="input__hint-description">{hint}</span>
  </div>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
