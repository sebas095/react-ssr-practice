import React, { useContext, useEffect } from 'react';
import { SearchItemContext } from '../context/searchItem';

const Home = () => {
  const { setSearchItem } = useContext(SearchItemContext);

  useEffect(() => {
    setSearchItem('');
  }, []);

  return <></>;
};

export default Home;
