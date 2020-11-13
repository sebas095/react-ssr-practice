import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../styles/constants';

const ButtonStyled = styled.button`
  width: 100%;
  background-color: ${constants.secondary};
  color: ${constants.white};
  padding: calc(${constants.defaultSpacing} * 0.8);
  font-size: 18px;
  font-weight: 400;
  border-color: ${constants.secondary};
  border-radius: ${constants.defaultRadius};
  border-style: solid;
  box-shadow: none;
  cursor: pointer;
`;

const Button = ({ onClick, title }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {title}
    </ButtonStyled>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
