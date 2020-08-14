import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
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