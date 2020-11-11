import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import constants from '../../styles/constants';

import { SearchItemContext } from '../../context/searchItem';

import searchIcon from '../../assets/img/icons/search.png';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 50px;
`;

const Input = styled.input`
  height: 20px;
  padding: calc(${constants.defaultSpacing} / 2);
  border-color: transparent;

  &:focus {
    outline: 1px solid ${constants.gray};
  }

  &::placeholder {
    color: ${constants.gray};
    opacity: 0.7;
  }
`;

const Button = styled.button`
  border-color: transparent;

  &:focus {
    outline: 1px solid ${constants.gray};
  }
`;

const SearchBox = () => {
  const history = useHistory();
  const { searchItem, setSearchItem } = useContext(SearchItemContext);

  const handleSubmit = ev => {
    ev.preventDefault();
    history.push(`/search?q=${searchItem}`);
  };

  return (
    <Form role="search" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="seartchItem"
        placeholder="Nunca dejes de buscar..."
        value={searchItem}
        onChange={e => setSearchItem(e.target.value)}
      />
      <Button type="submit">
        <img src={searchIcon} alt="Search" />
      </Button>
    </Form>
  );
};

export default SearchBox;
