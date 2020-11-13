import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import constants from '../styles/constants';

const NotFoundStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    margin: ${constants.defaultSpacing};
  }
`;

const NotFound = () => {
  return (
    <NotFoundStyled>
      <p>Oops! Por acá no está lo que estás buscando</p>
      <Link to="/" title="Volver al inicio">
        Volver al inicio
      </Link>
    </NotFoundStyled>
  );
};

export default NotFound;
