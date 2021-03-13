import React from 'react';

import './button.styles.scss';

const Button = ({ label, onClick, type }) => (
  <button type={type} className="custom-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
