import styled from 'styled-components';
import bg from '../../assets/login_bg.jpg';

export const login = styled.section`
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  ::before {
    display: block;
    min-width: 345px;
    content: '';
    background: url(${bg}) no-repeat center center;
    background-size: cover;
    min-height: 480px;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    ::before {
      display: none;
    }
  } ;
`;

export const form = styled.div`
  max-width: 345px;

  @media (max-width: 40rem) {
    max-width: 100%;
  } ;
`;
