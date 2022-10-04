import styled from "styled-components"

export const CartItemContainer = styled.section`
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: space-between;
margin: 0.5rem auto;
padding: 20px;
border-radius: 15px;
width: 100%;
max-width: 900px;
font-family: Fredoka One;
background-color: #ffffff87;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
h3 {
    font-size: 1.5rem;
    font-family: Fredoka One;
    text-transform: uppercase;
    text-shadow: 0px 3px 3px #0e25373d;
  }
h4 {
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
}
p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
img {
    width: 100%;
    max-width: 200px;
    min-height: 100px;
  }
article {
  align-self: flex-start;
  padding: 1rem;
  width: 100%;
  max-width: 600px;
}
@media (max-width: 767px) {
   {
    flex-flow: column;
    margin: 1rem;
  }
}
`