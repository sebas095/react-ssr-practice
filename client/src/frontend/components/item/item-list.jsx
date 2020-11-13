import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ItemCard from './item-card';

import constants from '../../styles/constants';

const ItemListStyled = styled.section`
  max-width: ${constants.maxWidth};
  padding: 0 ${constants.defaultSpacing};
  margin: auto;
`;

const List = styled.ul`
  max-width: 97%;
  margin: ${constants.defaultSpacing} 0 calc(${constants.defaultSpacing} * 4);
  width: 100%;
  padding: 0 ${constants.defaultSpacing};
  border-radius: ${constants.defaultRadius};
  background-color: ${constants.white};
`;

const LinkStyled = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const ItemList = ({ items }) => {
  return (
    <ItemListStyled>
      <List>
        {items.map(item => (
          <li key={item.id}>
            <LinkStyled to={`/items/${item.id}`} className="no-decoration">
              <ItemCard data={item} />
            </LinkStyled>
          </li>
        ))}
      </List>
    </ItemListStyled>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.string,
      free_shipping: PropTypes.bool,
      picture: PropTypes.string,
      address: PropTypes.string,
    }),
  ),
};

ItemList.defaultProps = {
  items: [],
};

export default ItemList;
