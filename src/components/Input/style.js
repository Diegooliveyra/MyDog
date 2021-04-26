import styled from 'styled-components';
import pata from '../../assets/pata.svg';
import lock from '../../assets/lock.svg';

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0.75rem;
  border: none;
  border-bottom: 1px solid #c5c5c5;
  outline: none;
  font-size: 13px;
`;

export const LabelIcon = styled.div`
  position: relative;
  width: 100%;
  ::before {
    content: '';
    display: block;
    height: 20px;
    width: 20px;
    background-image: url(${(props) =>
      props.primary ? `${pata}` : `${lock}`});
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 5px;
  }
`;
