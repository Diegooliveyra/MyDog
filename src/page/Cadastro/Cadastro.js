import React, { useContext, useState } from 'react';
import * as S from './style';
import dog from '../../assets/dog.png';
import Input from '../../components/Input/Input';
import Button from '../../components/buttons/Button';
import { UserContext } from '../../UserContext';
import useLocalStorage from '../../hooks/useLocalStorage';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const { setToken } = useContext(UserContext);
  const [produto, setProduto] = useLocalStorage('token', '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduto('token', '');
    setProduto(JSON.stringify(user));
    setToken(true);
  };

  const onChange = ({ target }) => {
    const { value, name } = target;
    setUser({ ...user, [name]: value });
  };

  return (
    <S.login>
      <S.form>
        <h1> Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Usuario ou Email"
            primary
            onChange={onChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={onChange}
          />
          <Button>Criar um Conta</Button>
          <p>
            Você ja tem uma conta ?<a href="/login"> Faça o Login</a>
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
