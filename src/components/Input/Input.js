import React from 'react';
import { InputStyled, LabelIcon } from './style';

const Input = ({ type, name, placeholder, onchange, ...props }) => {
  return (
    <LabelIcon {...props}>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
      ></InputStyled>
    </LabelIcon>
  );
};

export default Input;
