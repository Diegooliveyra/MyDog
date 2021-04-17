import styled from 'styled-components';
import bg from '../../assets/login_bg.jpg';

export const HomeStyle = styled.section`
  display: grid;
  grid-template-columns: 400px 400px;
  box-shadow: 0px 10px 20px 4px rgba(0, 0, 0, 0.1);
  height: 657px;
  ::before {
    display: block;
    min-width: 345px;
    content: '';
    background: url(${bg}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 100vw;
    min-height: 100vh;

    ::before {
      display: none;
    }
  } ;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 2rem;

  @media (max-width: 40rem) {
    padding: 2rem 1rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 50px;
  }
`;

export const About = styled.div`
  width: 100%;
  padding: 1.2rem 0;
  margin: 1rem 0;
  border-radius: 10px;
  background-color: #f5f5f5;

  ul {
    display: flex;
    justify-content: space-around;
  }

  ul li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  ul li img {
    max-width: 30px;
    margin-top: 1rem;
  }
`;

export const MainInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 45%;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: #ff9118;
  color: #fff;
  text-align: center;
  img {
    max-width: 30px;
    margin-bottom: 1rem;
  }
  p {
    font-size: 14px;
    max-width: 80px;
  }
`;
