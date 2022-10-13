import styled from "styled-components";

export const Orders = styled.table`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 800;
  font-size: 0.8rem;
  max-width: 420px;
  width: 100%;
  margin: 1rem 0;
  border: 0.2rem #0d2538 ridge;
  text-align: center;
  caption {
    font-size: 1rem;
  }
  td {
    max-width: 2rem;
    padding: 0.2rem;
    background: #ffffffb6;
    border: 0.1rem #0d2538 solid;
  }
  tr td:nth-child(1) {
    text-align: left;
  }; 
  tr td:nth-child(3), tr td:last-child {
    text-align: right;
  }
`
