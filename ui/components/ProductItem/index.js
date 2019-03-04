import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Styles from './styles';
import HoverWrapper from './HoverWrapper';
// import { timeago } from '../../../modules/dates';

const ProductItem = ({
  id,
  productName,
  files,
  price,
  orderCount,
  viewCount,
  isSmall,
  isGrid,
  org,
}) => (
  <Styles.ProductItemWrapper to={`/product/${id}`}>
    <Styles.HeaderContentWrapper>
      <HoverWrapper viewCount={viewCount} isGrid={isGrid} isSmall={isSmall} />
      {files.length > 0 ? (
        files.map((item) => {
          if (item.refType === 'ProductCover') {
            return (
              <div key={item._id}>
                <Styles.ProductImage
                  className="mr-3"
                  src={item.images[0].imgUrl}
                  alt="imgProduct"
                  isSmall={isSmall}
                  isGrid={isGrid}
                />
              </div>
            );
          }
          return null;
        })
      ) : (
        <Styles.ProductImage
          className="mr-3"
          src="/img/image-empty.png"
          alt="imgProduct"
          isSmall={isSmall}
          isGrid={isGrid}
        />
      )}
      <Styles.ItemWrapper>
        <Styles.SiderWrapper to={`/org/${id}`}>
          {org.files.map((item) => (
            <div key={item._id}>
              <Styles.SiderImage isSmall={isSmall} src={item.images[0].imgUrl} alt="siderImage" />
            </div>
          ))}
          <Styles.SiderName isSmall={isSmall} isGrid={isGrid}>
            {org.name.first} {org.name.last}
          </Styles.SiderName>
        </Styles.SiderWrapper>
        <Styles.ProductName>{productName}</Styles.ProductName>
        <Styles.ProductPrice>
          <NumberFormat
            value={price}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            prefix="IDR "
          />
        </Styles.ProductPrice>
        <Styles.ProductLocationWrapper>
          <Styles.IconLocation className="icon ion-md-locate" />
          Jakarta
        </Styles.ProductLocationWrapper>
        {isSmall ? (
          ''
        ) : (
          <Styles.ProductRatingWrapper className="clearfix">
            <Styles.ProductRating>
              <Styles.IconRating className="icon ion-md-star" />
              4.5
            </Styles.ProductRating>
            <Styles.ProductCount>(2 review) | {orderCount} orders</Styles.ProductCount>
          </Styles.ProductRatingWrapper>
        )}
      </Styles.ItemWrapper>
    </Styles.HeaderContentWrapper>
  </Styles.ProductItemWrapper>
);

ProductItem.defaultProps = {
  isSmall: false,
  isGrid: false,
};
ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  orderCount: PropTypes.number.isRequired,
  viewCount: PropTypes.number.isRequired,
  org: PropTypes.object.isRequired,
  isSmall: PropTypes.bool,
  isGrid: PropTypes.bool,
};

export default ProductItem;
