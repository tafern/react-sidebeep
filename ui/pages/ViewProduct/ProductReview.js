import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StarRating from '../../components/StarRating';
import {
  ContentWrapper,
  ReviewWrapper,
  BeeperName,
  RatingWrapper,
  BeeperImage,
  ProductRating,
  CreatedAt,
  ReviewDescription,
  LineReview,
} from './styles';
import ProductReviewList from './ProductReviewList';

const productReviewDataList = ProductReviewList;
const ProductReview = () => (
  <ContentWrapper>
    <Row>
      <Col md={12}>
        <ReviewWrapper>Semua (45)</ReviewWrapper>
      </Col>
      {productReviewDataList.map((item) => (
        <div key={item.review_id}>
          <Col md={1}>
            <BeeperImage src={item.review_beeper_image} alt="siderImage" />
          </Col>
          <Col md={11}>
            <BeeperName>{item.beeper_name}</BeeperName>
            <RatingWrapper className="clearfix">
              <ProductRating>
                <StarRating count={Math.floor(item.review_rate)} />
              </ProductRating>
              <CreatedAt>{item.review_created_at}</CreatedAt>
            </RatingWrapper>
            <ReviewDescription>{item.review_note}</ReviewDescription>
            <LineReview />
          </Col>
        </div>
      ))}
    </Row>
  </ContentWrapper>
);

export default ProductReview;
