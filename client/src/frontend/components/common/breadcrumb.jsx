import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import constants from '../../styles/constants';

const BreadcrumbStyled = styled.nav`
  max-width: ${constants.maxWidth};
  margin: auto;
`;

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  margin: ${constants.defaultSpacing} 0;
  padding: 0 ${constants.defaultSpacing};

  @media (min-width: calc(${constants.deviceXl} + ${constants.defaultSpacing})) {
    padding: 0;
  }
`;

const Item = styled.li`
  &:not(:last-child)::after {
    content: '>';
    color: ${constants.gray};
    padding: calc(${constants.defaultSpacing} / 2);
  }

  &:last-child {
    font-weight: bold;
  }
`;

const Breadcrumb = ({ categories }) => {
  return (
    <BreadcrumbStyled>
      <List>
        {categories.map(category => (
          <Item key={category}>
            <Link to="/" title={category}>
              {category}
            </Link>
          </Item>
        ))}
      </List>
    </BreadcrumbStyled>
  );
};

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

Breadcrumb.defaultProps = {
  categories: [],
};

export default Breadcrumb;
