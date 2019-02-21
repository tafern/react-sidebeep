import React from 'react';
import PropTypes from 'prop-types';
import { Products, ProductName } from './styles';
import ProductList from '../ProductList';

const OtherProduct = ({ productsDataQuery }) => (
  <Products>
    <ProductName>Other Service</ProductName>
    <ProductList data={productsDataQuery} isSmall />
  </Products>
);
OtherProduct.propTypes = {
  productsDataQuery: PropTypes.object.isRequired,
};
export default OtherProduct;
