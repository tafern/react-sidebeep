import React from 'react';
import PropTypes from 'prop-types';
// import { timeago } from '../../../modules/dates';
import Styles from './styles';

const ProductItem = ({ id, productName, files }) => (
  <Styles.ProductItemWrapper to={`/product/${id}`}>
    <Styles.HeaderContentWrapper>
      {files.map((item) => {
        if (item.type === 'ProductCover') {
          return (
            <div key={item._id}>
              <Styles.ProductImage src={item.images[0].imgUrl} alt="imgProduct" />
            </div>
          );
        }
        return null;
      })}
      <Styles.ItemWrapper>
        <Styles.SiderWrapper to={`/org/${id}`}>
          <Styles.SiderImage src="/img/logo-sider/shoesandcare.jpg" alt="siderImage" />
          <Styles.SiderName>SHOES AND CARE (SENAYAN)</Styles.SiderName>
        </Styles.SiderWrapper>
        <Styles.ProductName>{productName}</Styles.ProductName>
        <Styles.ProductPrice>IDR 5.000.000</Styles.ProductPrice>
        <Styles.ProductLocationWrapper>
          <Styles.IconLocation className="icon ion-md-locate" />
          Jakarta
        </Styles.ProductLocationWrapper>
        <Styles.ProductRatingWrapper className="clearfix">
          <Styles.ProductRating>
            <Styles.IconRating className="icon ion-md-star" />
            (5)
          </Styles.ProductRating>
          <Styles.ProductCount>(22 review) | 48 orders | 70 views</Styles.ProductCount>
        </Styles.ProductRatingWrapper>
      </Styles.ItemWrapper>
    </Styles.HeaderContentWrapper>
  </Styles.ProductItemWrapper>
);

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
};

export default ProductItem;
