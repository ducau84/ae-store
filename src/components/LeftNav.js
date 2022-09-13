import React from 'react';
import styled from 'styled-components';


const LeftNav = ( { open, categories } ) => {
    return (
        <Menu open={open}>
            {categories.map( ( category ) => {
                return (
                    <li key={category.id}>
                        {category.nombre}
                    </li>
                );
            } )}
        </Menu>
    )
}

export default LeftNav

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  li:hover {
    background-color: #5400fc;
    border-radius: 5px;
    transition: 600ms ease;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${( { open } ) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`