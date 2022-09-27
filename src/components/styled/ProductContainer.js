import styled from "styled-components";

export const ProductContainer = styled.section`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: center;
margin: 1rem auto;
padding: 20px;
border-radius: 15px;
max-width: 1200px;
min-height: 80vh;
font-family: Fredoka One;
background-color: #ffffff87;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
a {
  text-decoration: none;
}
@media (max-width: 767px) {
  {
    margin: 1rem;
  }
}
`