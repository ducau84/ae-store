import styled from "styled-components"

export const CartItemContainer = styled.section`
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
margin: 1rem auto;
padding: 20px;
border-radius: 15px;
max-width: 1200px;
font-family: Fredoka One;
background-color: #ffffff87;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
a {
  text-decoration: none;
}
img {
    width: 100%;
    max-width: 200px;
    min-height: 100px;
  }
@media (max-width: 767px) {
  {
    margin: 1rem;
  }
}
`