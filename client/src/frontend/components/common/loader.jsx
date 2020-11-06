import React from 'react';
import styled from 'styled-components';

import constants from '../../styles/constants';
import spinAnimation from '../../styles/keyframes';

const LoaderStyled = styled.div`
  display: grid;
  place-items: center;
  height: 80vh;
`;

const LoaderContentStyled = styled.div`
  border: calc(${constants.defaultSpacing} / 2) solid ${constants.white};
  border-radius: 50%;
  border-top: calc(${constants.defaultSpacing} / 2) solid ${constants.gray};
  width: 80px;
  height: 80px;
  animation: ${spinAnimation} 2s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderContentStyled />
    </LoaderStyled>
  );
};

export default Loader;
