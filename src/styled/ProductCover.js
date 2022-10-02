import styled from "styled-components";

export const ProductCover = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 100%;
    max-width: 500px;
  }
  h2 {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
    text-shadow: 0px 3px 3px #0e25373d;
  }
`