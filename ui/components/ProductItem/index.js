import React from 'react';
import PropTypes from 'prop-types';
import { timeago } from '../../../modules/dates';
import Styles from './styles';

const ProductItem = ({ id, isPublic, productName, productDescription, files, updatedAt }) => (
  <Styles.ProductItemWrapper to={`/product/${id}`}>
    <Styles.HeaderContentWrapper>
      {files.map((item) => {
        if (item.type === 'Product') {
          return (
            <div key={item._id}>
              <Styles.ProductImage src={item.images[0].imgUrl} alt="imgProduct" />
            </div>
          );
        }
        return null;
      })}
      <Styles.ItemWrapper>
        {isPublic ? (
          <span className="label label-success">Public</span>
        ) : (
          <span className="label label-info">Private</span>
        )}
        <Styles.ProductName>{productName}</Styles.ProductName>
        <Styles.ProductPrice>{productDescription}</Styles.ProductPrice>
        <Styles.ProductRating>{timeago(updatedAt)}</Styles.ProductRating>
      </Styles.ItemWrapper>
    </Styles.HeaderContentWrapper>
  </Styles.ProductItemWrapper>
);

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default ProductItem;
