// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledChar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.25em;

  button {
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em; 
  }
`

export default function Character(props) {

    const { character, open } = props

    return (
        <StyledChar>
            {character.name}
            <button onClick={() => open(character.id)}>
                See Details
            </button>
        </StyledChar>
    )
}