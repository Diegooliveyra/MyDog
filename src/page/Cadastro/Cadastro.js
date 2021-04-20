import React, { useContext, useState } from 'react';
import * as S from './style';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import dog from '../../assets/dog.png';
import Input from '../../components/Input/Input';
import Button from '../../components/buttons/Button';
import { useNavigate } from 'react-router';
import { UserContext } from '../../UserContext';
import useLocalStorage from '../../hooks/useLocalStorage';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const { setToken } = useContext(UserContext);
  const [produto, setProduto] = useLocalStorage('token', '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.removeItem('token');
    setProduto(JSON.stringify(user));
    navigate('/');
    setToken(true);
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
          <Button>Create an account</Button>
          <p>
            Do you already have an account?
            <a href="/login"> Sign in!</a>
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
