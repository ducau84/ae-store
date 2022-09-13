const getData = ( data ) => {
  return new Promise( ( res ) => {
    setTimeout( () => {
      res( JSON.stringify( data ) );
    }, 2000 );
  } );
};

export default getData