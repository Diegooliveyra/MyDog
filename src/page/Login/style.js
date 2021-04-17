import styled from 'styled-components';
import bg from '../../assets/login_bg.jpg';
import pata_laranja from '../../assets/pata_laranja.svg';

export const login = styled.section`
  display: grid;
  grid-template-columns: 400px 400px;
  box-shadow: 0px 10px 20px 4px rgba(0, 0, 0, 0.1);
  min-height: 657px;
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
    min-width: 100%;
  }

  svg {
    margin-top: 3rem;
  }

  form {
    width: 250px;
    margin: 2rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin: 1rem 0;
  }

  p {
    font-size: 10px;
    font-weight: bold;
  }

  a {
    color: #ff9118;
  }
`;

export const wrapperImage = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  ::before {
    content: '';
    display: block;
    border-radius: 50%;
    height: 100%;
    width: 150%;
    background-color: #ff9118;
    position: absolute;
    z-index: -1;
    bottom: -200px;
    left: -24%;
  }

  img {
    margin: 0 auto;
    position: relative;
  }

  span {
    ::before {
      content: '';
      display: block;
      height: 30px;
      width: 30px;

      background-image: url(${pata_laranja});
      background-repeat: no-repeat;
      background-position: center center;
      position: absolute;
      z-index: 99;
      left: 5%;
      top: 10%;
    }

    ::after {
      content: '';
      display: block;
      height: 30px;
      width: 30px;

      background-image: url(${pata_laranja});
      background-repeat: no-repeat;
      background-position: center center;
      position: absolute;
      z-index: 99;
      right: 5%;
      bottom: 50%;
    }
  }
`;
