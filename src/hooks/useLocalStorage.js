import { useState } from "react";

const useLocalStorage = ( key, initialVal ) => {
	const [ storedVal, setStoredVal ] = useState( () => {
		return JSON.parse( window.localStorage.getItem( key ) ) || initialVal;
	} );

	const setNewValue = ( newVal ) => {
		setStoredVal( newVal );
		window.localStorage.setItem( key, JSON.stringify( newVal ) );
	};

	return [ storedVal, setNewValue ];
};

export default useLocalStorage;
