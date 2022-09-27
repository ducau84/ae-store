import styled from "styled-components";

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