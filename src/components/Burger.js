import React, { useState } from 'react';
import { StyledBurger } from '../styled/Burger';
import LeftNav from './LeftNav';


const Burger = ( { categories } ) => {

  const [ open, setOpen ] = useState( false );

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen( !open )}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open} categories={categories} />
    </>
  );
};

export default Burger