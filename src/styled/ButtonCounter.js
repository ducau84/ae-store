import styled from "styled-components"

export const ButtonCounter = styled.button`
  margin: 10px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 25px;
  background-color: #0d2538;
  color: #ffffff;
  font-weight: 500;
  border: #1e005a 2px solid;
  cursor: pointer;

  &:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  background-color: #32a3c8;
  transition: 600ms ease;
  }
`