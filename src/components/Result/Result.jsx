import React from 'react';
import PropTypes from 'prop-types';

import './Result.css'

const Result = ({ days, value }) => (
  <div>
    <p className="result__p">{days}: <strong >{value}</strong></p>
  </div>
)

Result.propTypes = {
  days: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export default Result;
