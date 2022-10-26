import styled from "styled-components";

const colorType = {
  normal: "#0e2537",
  confirm: "#047307",
  delete: "#db291c"
};

const hoverColorType = {
  normal: "#32a3c8",
  confirm: "#07bc0c",
  delete: "#32a3c8"
}

export const Button = styled.button`
display: flex;
flex-flow: row nowrap;
align-items: center;
margin: 5px;
padding: 8px;
width: auto;
font-family: Fredoka One;
font-size: 1rem;
text-transform: uppercase;
color: #ffffff;
border: #fff solid 2px;
border-radius: 15px;
background: ${( { color } ) => colorType[ color ] || `${color}`};
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
cursor: pointer;

&:hover {
background: background: ${( { color } ) => hoverColorType[ color ] || `${color}`};
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
transition: 800ms ease;
}

@media (max-width: 768px) {
   {
    flex-flow: wrap;
    svg{
      width: 11%;
    }
  }
}
`