import styled from "styled-components"

export const BookContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: Fredoka One;
  background-color: #ffffff87;
  box-shadow: #0000003d 0px 3px 8px;
  max-width: 320px;
  padding: 20px;
  border-radius: 15px;
  img {
    width: 100%;
    max-width: 200px;
    min-height: 100px;
  }
  h3 {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  h4 {
    font-size: 1.3rem;
    font-weight: 200;
    padding: 0.3rem;
  }
  a {
    text-decoration: none;
  }
`