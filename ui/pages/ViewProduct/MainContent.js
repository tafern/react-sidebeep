import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Portfolio from '../../components/Portfolio';
import StartRating from '../../components/StartRating';
import {
  ContentWrapper,
  PortfolioWrapper,
  ProductTitle,
  ProductRating,
  ProductSeenOrderWrapper,
  ProductSeenOrderImage,
  ProductSeenOrder,
  ProductDescription,
  ProductDate,
  ProductStatus,
  OrderButton,
} from './styles';

const MainContent = ({
  productName,
  productDescription,
  isPublic,
  createdAt,
  files,
  addToCart,
}) => (
  <ContentWrapper>
    <Row>
      <Col sm={4}>
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
      </Col>
      <Col sm={8}>
        <ProductTitle>{productName}</ProductTitle>
        <ProductRating>
          <StartRating count={Math.floor(4.5)} />
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
        </ProductSeenOrderWrapper>
        <ProductDescription>{productDescription}</ProductDescription>
        <ProductDate>{createdAt}</ProductDate>
        <ProductStatus>{isPublic}</ProductStatus>
        <OrderButton bsStyle="success">Order</OrderButton>
        <OrderButton bsStyle="primary" onClick={addToCart}>
          Add to Cart
        </OrderButton>
      </Col>
    </Row>
  </ContentWrapper>
);

MainContent.propTypes = {
  isPublic: PropTypes.bool.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default MainContent;
