import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-family: Fredoka One;
  margin: 1rem;
  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
    color: #0d2538;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  h2 {
    text-align: right;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 1rem auto;
  }
`
