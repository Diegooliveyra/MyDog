import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::root {
    --black-color: #313131;
    --orange-color: #FF9118;
  }

  body {
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100vh;
    font-family: "Roboto";
    color: var(----black-color);

    @media(max-width: 40rem) {
      display: block
    }
  }
 
  
  ul, li {
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color:var(--black-color);
  }
  a {
    text-decoration: none;
    color: var(--black-color);
  }
  
`;

export const Container = styled.div`
  max-width: 60rem;
  padding: 0 1rem;
  margin: 0 auto;
`;
