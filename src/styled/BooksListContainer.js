import styled from "styled-components"

export const BooksListContainer = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  gap: 1rem;

  @media (max-width: 767px) {
     {
      grid-template-columns: auto auto;
    }
    svg {
      width: 250px;
    }
  }

  @media (max-width: 467px) {
     {
      grid-template-columns: auto;
    }
  }
`