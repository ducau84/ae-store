import styled from "styled-components";

export const ProductHeader = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
    font-family: Fredoka One;
    padding-bottom: 1rem;
    text-transform: uppercase;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  h3 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 800;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media (max-width: 767px) {
     {
      flex-flow: wrap;
    }
  }
 `

export const ProductCover = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-height: 65vh;
  img {
    width: 100%;
    max-width: 580px;
  }
  span {
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
    padding: 0.2rem 1rem;
  }
`

export const ProductCounterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 400px;
  margin: 2rem;
  h2 {
    font-size: 2rem;
    padding: 1rem 2rem;
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
    margin 15px;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  h4 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
    padding: 2rem;
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
  }
`