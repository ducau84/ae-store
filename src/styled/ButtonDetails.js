import styled from "styled-components"

export const ButtonDetails = styled.button`
  display: flex;
  align-items: center;
  font-family: Fredoka One;
  text-transform: uppercase;
  font-size: 1rem;
  color: #ffffff;
  margin: 5px;
  padding: 5px 10px;
  width: auto;
  border-radius: 15px;
  background-color: #e70e7b;
  border: #1e005a solid 2px;
  box-shadow: #0000003d 0px 3px 8px;

  &:hover {
    background-color: #0e2537;
    border: #32a3c8 solid 2px;
    transition: 800ms ease;
    cursor: pointer;
  }
`