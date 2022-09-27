import styled from "styled-components";

export const Button = styled.button`
display: flex;
align-items: center;
margin: 10px;
padding: 8px;
width: auto;
font-family: Fredoka One;
font-size: 1rem;
text-transform: uppercase;
color: #ffffff;
border: #fff solid 1px;
border-radius: 15px;
background-color: #0e2537;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
cursor: pointer;

&:hover {
background-color: #32a3c8;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
transition: 800ms ease;
}

@media (max-width: 767px) {
   {
    flex-flow: wrap;
  }
}
`