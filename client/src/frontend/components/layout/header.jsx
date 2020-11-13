import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SearchBox from './search-box';

import constants from '../../styles/constants';

import logo from '../../assets/img/logo.png';

const HeaderStyled = styled.header`
  background-color: ${constants.primary};
`;

const ContentHeader = styled.div`
  max-width: ${constants.maxWidth};
  margin: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${constants.defaultSpacing};
  place-items: center;
  padding: ${constants.defaultSpacing};
`;

const BrandHeader = styled.div`
  img {
    height: 40px;
    vertical-align: middle;
  }
`;

const SearchHeader = styled.div`
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <ContentHeader>
        <BrandHeader>
          <Link to="/">
            <img src={logo} alt="Mercado Libre Logo" />
          </Link>
        </BrandHeader>
        <SearchHeader>
          <SearchBox />
        </SearchHeader>
      </ContentHeader>
    </HeaderStyled>
  );
};

export default Header;
