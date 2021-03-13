import React from 'react';
import PropTypes from 'prop-types';

import './form-input.styles.scss';

const FormInput = ({ onChange, label }) => (
  <div className="group">
    <input className="form-input" onChange={onChange} />
    {label ? <label className="form-input-label">{label}</label> : null}
  </div>
);

FormInput.defaultProps = {
  label: null
};

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

export default FormInput;
