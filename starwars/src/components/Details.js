import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const StyledDetails = styled.div`

    opacity: 0;
    animation: ${kf} 0.3s ease-in-out forwards;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px white;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;

  button {
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em; 
  }
`


export default function Details(props) {
    const { info, id, close } = props  
  
    return (
      <StyledDetails>
        <h2>Details:</h2>
        {
            id &&
            <>
            <p>{info[id-1].name} is {info[id-1].status}</p>
            <p>Species: {info[id-1].species}</p>
            <p>Gender: {info[id-1].gender}</p>
            <p></p>
            <button onClick={close}>Close</button>
            </>
        }
      </StyledDetails>
    )
}