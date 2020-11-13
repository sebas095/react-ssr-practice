import React, { useContext, useEffect, useState } from 'react';

import Loader from '../components/common/loader';
import ItemList from '../components/item/item-list';
import Breadcrumb from '../components/common/breadcrumb';

import { LoadingContext } from '../context/loading';
import { SearchItemContext } from '../context/searchItem';

import useQuery from '../hooks/useQuery';

import ApiService from '../services/api.service';

const Search = () => {
  const queryParams = useQuery();
  const [searchResults, setSearchResults] = useState({ categories: [] });

  const { loading, setLoading } = useContext(LoadingContext);
  const { searchItem, setSearchItem } = useContext(SearchItemContext);

  const fetchResults = async () => {
    setLoading(true);
    const response = await ApiService.searchItem(queryParams.get('q'));
    setSearchResults(response);
    setLoading(false);
  };

  useEffect(() => {
    if (queryParams.get('q') !== searchItem) {
      setSearchItem(queryParams.get('q'));
    }
    // setSearchResults(queryParams.get('q'));
    fetchResults();
  }, [queryParams.get('q')]);

  if (loading) return <Loader />;

  return (
    <>
      <Breadcrumb categories={searchResults.categories} />
      <ItemList items={searchResults.items} />
    </>
  );
};

export default Search;
