/* eslint-disable camelcase */
import React from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../styles/constants';

import shippingIcon from '../../assets/img/icons/shipping.png';

const ItemCardStyled = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: ${constants.defaultSpacing};
  align-items: center;
  max-width: 100%;
  font-size: 0.6em;
  padding: ${constants.defaultSpacing} 0;
  background-color: ${constants.white};
  border-bottom: 1px solid ${rgba(`${constants.gray}`, 0.2)};
  color: ${constants.black};

  &:last-child {
    border: none;
  }

  h2 {
    margin: 0;
    font-weight: 400;
    margin-bottom: ${constants.defaultSpacing};
  }

  @media (min-width: ${constants.deviceMd}) {
    grid-template-columns: 180px 1fr;
  }
`;

const Picture = styled.div`
  margin: 0;
  height: 120px;
  border-radius: ${constants.defaultRadius};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: contain;
  }

  @media (min-width: ${constants.deviceMd}) {
    margin: 0;
    height: 180px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  font-size: 2em;
  margin-bottom: ${constants.defaultSpacing};

  img {
    margin-left: calc(${constants.defaultSpacing} / 2);
    width: 20px;
    height: 20px;
  }

  @media (min-width: ${constants.deviceMd}) {
    font-size: 24px;
  }

  @media (min-width: ${constants.deviceLg}) {
    margin-bottom: calc(${constants.defaultSpacing} * 2);
  }
`;

const Title = styled.div`
  @media (min-width: ${constants.deviceMd}) {
    h2 {
      font-size: 18px;
    }

    span {
      font-size: 12px;
    }
  }

  @media (min-width: ${constants.deviceLg}) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: start;

    h2 {
      margin-bottom: none;
    }
  }
`;

const ItemCard = ({
  data: { title, price, free_shipping, picture, address },
}) => {
  return (
    <ItemCardStyled>
      <Picture>
        <img src={picture} alt={title} />
      </Picture>
      <div>
        <Price>
          <span>{price}</span>
          {free_shipping && <img src={shippingIcon} alt="Free Shipping" />}
        </Price>
        <Title>
          <h2>{title}</h2>
          <span>{address}</span>
        </Title>
      </div>
    </ItemCardStyled>
  );
};

ItemCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    free_shipping: PropTypes.bool,
    picture: PropTypes.string,
    address: PropTypes.string,
  }),
};

ItemCard.defaultProps = {
  data: {},
};

export default ItemCard;
