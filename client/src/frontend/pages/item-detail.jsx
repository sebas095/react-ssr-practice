import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Breadcrumb from '../components/common/breadcrumb';
import Loader from '../components/common/loader';
import Item from '../components/item/item';

import { LoadingContext } from '../context/loading';

import ApiService from '../services/api.service';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);

  const fetchItem = async () => {
    setLoading(true);
    const {
      item: { categories: categoriesResponse, ...itemResponse },
    } = await ApiService.getItemDetails(id);

    setCategories(categoriesResponse);
    setItem(itemResponse);
    setLoading(false);
  };

  useEffect(() => {
    fetchItem(id);
  }, [id]);

  if (loading) <Loader />;

  return (
    <>
      <Breadcrumb categories={categories} />
      <Item item={item} />
    </>
  );
};

export default ItemDetail;
