import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ::root {
    --black-color: #313131;
    --orange-color: #FF9118;
  }

  body {
    margin: 0;
    font-family: "Roboto";
  }
  h1, h2, h3, h4, p {
    margin: 0;
  }
  
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
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
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;
