import React from 'react';
import { InputStyled, LabelIcon } from './style';

const Input = ({ type, name, placeholder, ...props }) => {
  return (
    <LabelIcon {...props}>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
      ></InputStyled>
    </LabelIcon>
  );
};

export default Input;
