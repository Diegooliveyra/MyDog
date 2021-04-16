import React from 'react';
import * as S from './style';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import dog from '../../assets/dog.png';
import Input from '../../components/Input/Input';

const Login = () => {
  return (
    <S.login>
      <S.form>
        <Logo />
        <form action="">
          <Input type="text" name="name" placeholder="Username or e-mail" />
          <Input type="password" name="name" placeholder="Password" />
          <button>Login</button>
          <p>
            Don’t have an account yet ?<a href="/">Sign up!</a>
          </p>
        </form>
        <div>
          <img src={dog} alt="" />
        </div>
      </S.form>
    </S.login>
  );
};

export default Login;
