import React, { useContext, useState } from 'react';
import * as S from './style';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import dog from '../../assets/dog.png';
import Input from '../../components/Input/Input';
import Button from '../../components/buttons/Button';
import { useNavigate } from 'react-router';
import { UserContext } from '../../UserContext';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const navigate = useNavigate();
  const { token, setToken } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(token);
    if (token) {
      validation();
    }
  };

  const validation = () => {
    const userToken = window.localStorage.getItem('token');
    const userData = JSON.parse(userToken);
    console.log(userData);
    if (
      user.username === userData.username &&
      user.password === userData.password
    ) {
      setToken(true);
      navigate('/');
    }
  };

  const onChange = ({ target }) => {
    const { value, name } = target;
    setUser({ ...user, [name]: value });
  };

  return (
    <S.login>
      <S.form>
        <Logo />
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username or e-mail"
            primary
            onChange={onChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
          <Button>Login</Button>
          <p>
            Don’t have an account yet ?<a href="/cadastro"> Sign up!</a>
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
