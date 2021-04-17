import React from 'react';
import * as S from './style';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import dog from '../../assets/dog.png';
import Input from '../../components/Input/Input';
import Button from '../../components/buttons/Button';

const Login = () => {
  return (
    <S.login>
      <S.form>
        <Logo />
        <form action="">
          <Input
            type="text"
            name="username"
            placeholder="Username or e-mail"
            primary
          />
          <Input type="password" name="password" placeholder="Password" />
          <Button>Login</Button>
          <p>
            Don’t have an account yet ?<a href="/"> Sign up!</a>
          </p>
        </form>
        <S.wrapperImage>
          <span></span>
          <img src={dog} alt="" />
        </S.wrapperImage>
      </S.form>
    </S.login>
  );
};

export default Login;
