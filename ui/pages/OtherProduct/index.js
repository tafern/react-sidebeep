import React from 'react';
import PropTypes from 'prop-types';
import { Product, ProductName } from './styles';
import ProductList from '../ProductList';

const OtherProduct = ({ productsDataQuery }) => (
  <Product>
    <ProductName>Other Service</ProductName>
    <ProductList data={productsDataQuery} isSmall />
  </Product>
);
OtherProduct.propTypes = {
  productsDataQuery: PropTypes.object.isRequired,
};
export default OtherProduct;
