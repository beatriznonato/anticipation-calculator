import React from 'react';
import PropTypes from 'prop-types';

import './Result.css'

const Result = ({ days, value }) => (
  <div className="result">
    <p className="result__text">{days}: <strong className="result__value">{value}</strong></p>
  </div>
)

Result.propTypes = {
  days: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export default Result;
