/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../styles/constants';

import Button from '../common/button';

const ItemStyled = styled.article`
  max-width: ${constants.maxWidth};
  margin: auto;
`;

const Content = styled.div`
  width: calc(100% - (${constants.defaultSpacing} * 2));
  padding: calc(${constants.defaultSpacing} * 2);
  border-radius: ${constants.defaultRadius};
  background-color: ${constants.white};
  margin-bottom: calc(${constants.defaultSpacing} * 4);
`;

const ItemHero = styled.div`
  figure {
    border-radius: ${constants.defaultRadius};
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  @media (min-width: ${constants.deviceMd}) {
    display: flex;

    figure {
      width: 400px;
      height: 400px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @media (min-width: ${constants.deviceLg}) {
    display: flex;

    figure {
      width: 680px;
      height: 680px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

const ItemInfo = styled.div`
  h1 {
    margin: ${constants.defaultSpacing} 0;
    font-size: 24px;
  }
`;

const ItemPrice = styled.p`
  margin: calc(${constants.defaultSpacing} * 2) 0;
  font-size: 46px;
`;

const ItemCondition = styled.div`
  font-size: 14px;
`;

const ItemConditionStatus = styled.span`
  &::after {
    content: '-';
    padding: calc(${constants.defaultSpacing} / 2);
  }
`;

const ItemDescription = styled.div`
  h3 {
    font-size: 28px;
    font-weight: 300;
    margin: calc(${constants.defaultSpacing} * 2) 0 0;
  }

  p {
    padding: calc(${constants.defaultSpacing} * 2) 0;
    margin: 0;
    color: ${constants.gray};
  }
`;

const Item = ({
  item: { title, picture, price, condition, sold_quantity, description },
}) => {
  return (
    <ItemStyled>
      <Content>
        <ItemHero>
          <figure>
            <img src={picture} alt="" />
          </figure>
          <ItemInfo>
            <ItemCondition>
              <ItemConditionStatus>
                {condition === 'new' ? 'Nuevo' : 'Usado'}
              </ItemConditionStatus>
              <span>{`${sold_quantity} vendidos`}</span>
            </ItemCondition>
            <h1>{title}</h1>
            {price && <ItemPrice>{price}</ItemPrice>}
            <div>
              <Button title="Comprar" onClick={() => {}} />
            </div>
          </ItemInfo>
        </ItemHero>
        <ItemDescription>
          <h3>Descripción del Producto</h3>
          <p>{description}</p>
        </ItemDescription>
      </Content>
    </ItemStyled>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    picture: PropTypes.string,
    pice: PropTypes.string,
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default Item;
