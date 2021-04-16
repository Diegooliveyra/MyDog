import React from 'react';
import { InputStyled } from './style';

const Input = ({ type, name, placeholder }) => {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
    ></InputStyled>
  );
};

export default Input;
