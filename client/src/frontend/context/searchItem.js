import React, { useState, createContext } from 'react';

export const SearchItemContext = createContext([]);

export const SearchItemContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState([]);

  return (
    <SearchItemContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </SearchItemContext.Provider>
  );
};
