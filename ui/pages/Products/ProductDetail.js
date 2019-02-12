import React from 'react';
import PropTypes from 'prop-types';
import { timeago } from '../../../modules/dates';
import Styles from './styles';

const ProductDetail = ({ id, isPublic, productName, productDescription, updatedAt }) => (
  <Styles.ProductDetailWrapper to={`/product/view/${id}`}>
    <Styles.HeaderContentWrapper>
      <Styles.DetailWrapper>
        {isPublic ? (
          <span className="label label-success">Public</span>
        ) : (
          <span className="label label-default">Private</span>
        )}
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <p>{timeago(updatedAt)}</p>
      </Styles.DetailWrapper>
    </Styles.HeaderContentWrapper>
  </Styles.ProductDetailWrapper>
);

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default ProductDetail;
