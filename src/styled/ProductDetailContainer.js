import styled from "styled-components";

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