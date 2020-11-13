import React, { useState, createContext } from 'react';

export const LoadingContext = createContext(null);

export const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
