import styled from 'styled-components';
import bg from '../../assets/login_bg.jpg';

export const login = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 560px;

  box-shadow: 0px 10px 20px 4px rgba(0, 0, 0, 0.1);
  ::before {
    display: block;
    min-width: 345px;
    content: '';
    background: url(${bg}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    ::before {
      display: none;
    }
  } ;
`;

export const form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 40rem) {
    min-height: 100vh;
  }

  svg {
    margin-top: 2rem;
  }

  form {
    margin: 2rem 0 0 0;
  }
`;
