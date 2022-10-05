import styled from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 10px;
  }

  a {
    padding: 5px;
    color: white;

    &:hover {
      background-color: #32a3c85c;
      border-radius: 5px;
      transition: 600ms ease;
    }
  }
  .active{
      color: #ec0f7d;
    }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538c9;
    position: fixed;
    transform: ${( { open } ) => ( open ? "translateX(0)" : "translateX(-100%)" )};
    top: 0;
    left: 0;
    height: auto;
    width: 15rem;
    padding: 5.5rem 0;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`