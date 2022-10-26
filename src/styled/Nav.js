import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 16rem;
  background-color: #0d2538;
  color: white;
  font-family: "Fredoka One";
  text-transform: uppercase;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  @media (max-width: 1500px) {
    justify-content: space-around;
    padding: 20px;
    font-size: 70%;
  }

`