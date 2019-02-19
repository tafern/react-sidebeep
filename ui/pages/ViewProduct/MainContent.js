import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import Portfolio from '../../components/Portfolio';
// import StarRating from '../../components/StarRating';
import {
  ContentWrapper,
  MainContentWrapper,
  PortfolioWrapper,
  ProductTitle,
  // ProductSeenOrderWrapper,
  // ProductSeenOrderImage,
  // ProductSeenOrder,
  ProductPrice,
  ProductLocationWrapper,
  IconImage,
  ProductRatingWrapper,
  ProductRating,
  IconRating,
  ProductCount,
  ProductLocationTitle,
  ProductLocationVisit,
  ProductLocationDescription,
  IconWrapper,
  IconShare,
  ShareTitle,
  IconWishlist,
  WishlistTitle,
  ButtonChatSider,
  ButtonShoppingCart,
  ButtonOrder,
} from './styles';

const MainContent = ({ productName, files, addToCart }) => (
  <ContentWrapper>
    <Row>
      <MainContentWrapper sm={5}>
        <PortfolioWrapper>
          {files.map((item) => {
            if (item.type === 'ProductPortfolio') {
              return (
                <div key={item._id}>
                  <Portfolio images={item.images} />
                </div>
              );
            }
            return null;
          })}
        </PortfolioWrapper>
      </MainContentWrapper>
      <MainContentWrapper sm={7}>
        <ProductTitle>{productName}</ProductTitle>
        {/* <ProductRating>
          <StarRating count={Math.floor(4.5)} />
        </ProductRating>
        <ProductSeenOrderWrapper>
          <Row>
            <Col xs={6} md={6}>
              <ProductSeenOrderImage src="/img/icons/service-seen.png" alt="seen" />
              <ProductSeenOrder>Servis di lihat : 100</ProductSeenOrder>
            </Col>
            <Col xs={6} md={6}>
              <ProductSeenOrderImage src="/img/icons/service-ordered.png" alt="ordered" />
              <ProductSeenOrder>Servis di pesan : 40</ProductSeenOrder>
            </Col>
          </Row>
        </ProductSeenOrderWrapper> */}
        <ProductPrice>IDR 5.000.000</ProductPrice>
        <ProductLocationWrapper>
          <IconImage className="icon ion-md-locate" />
          Jakarta
        </ProductLocationWrapper>
        <ProductRatingWrapper className="clearfix">
          <ProductRating>
            <IconRating className="icon ion-md-star" /> 5
          </ProductRating>
          <ProductCount>(22 review) | 48 orders | 70 views</ProductCount>
        </ProductRatingWrapper>
        <ProductLocationTitle>Service Location</ProductLocationTitle>
        <ProductLocationVisit>Visit Sider Location</ProductLocationVisit>
        <ProductLocationDescription>
          Meet at meeting point [cek detail info]
        </ProductLocationDescription>
        <IconWrapper className="clearfix">
          <IconShare src="/img/icons/share-green.png" alt="share" />
          <ShareTitle>Share it</ShareTitle>
          <IconWishlist src="/img/icons/wishlist-green.png" alt="wishlist" />
          <WishlistTitle>Wishlist</WishlistTitle>
        </IconWrapper>
        <ButtonChatSider>Chat Sider</ButtonChatSider>
        <ButtonShoppingCart onClick={addToCart}>
          <i className="icon ion-md-cart" />
        </ButtonShoppingCart>
        <div>
          <ButtonOrder bsStyle="primary" onClick={addToCart}>
            ORDER
          </ButtonOrder>
        </div>
      </MainContentWrapper>
    </Row>
  </ContentWrapper>
);

MainContent.propTypes = {
  productName: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default MainContent;