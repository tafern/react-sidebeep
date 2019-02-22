import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper } from './styles';

const ProductInformation = ({ desc }) => <ContentWrapper>{desc}</ContentWrapper>;
ProductInformation.propTypes = {
  desc: PropTypes.string.isRequired,
};
export default ProductInformation;
