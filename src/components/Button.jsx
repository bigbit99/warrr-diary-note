import React from 'react'
import styled from 'styled-components';

export default function Button(props) {
    const {label, styleClass, onClick, disabled} = props;
    return (
        <StyButton className={styleClass} onClick={onClick} disabled={disabled}>{label}</StyButton>
    )
}


const StyButton = styled.button`
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  color: #fff;
  font-size:1em;
  outline:0;
  border:1px solid #ffff;
  background-color:transparent;
  &:hover
  {
    background-color: #fff;
    color:#121212;
  }
`;
