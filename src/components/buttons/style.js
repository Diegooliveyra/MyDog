import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: ${(props) => (props.primary ? '#FF9118' : '#FFF')};
  color: ${(props) => (props.primary ? '#fff' : '#FF9118')};
  width: 180px;
  padding: 0.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;
