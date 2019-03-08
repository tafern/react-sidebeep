import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import StarRating from '../StarRating';
import {
  ContentWrapper,
  ReviewWrapper,
  BeeperName,
  BeeperImage,
  ProductRating,
  RatingWrapper,
  ReviewDescription,
  ReviewImage,
  LineReview,
  CreatedAt,
} from './styles';

const Review = ({
  onHandleReview,
  openReview,
  bColorReviewAll,
  bColorReviewWithPhoto,
  reviewAll,
  reviewWithPhoto,
}) => (
  <ContentWrapper>
    <div className="clearfix">
      <ReviewWrapper active={bColorReviewAll} onClick={(e) => onHandleReview(e, 'All', true)}>
        All (5)
      </ReviewWrapper>
      <ReviewWrapper
        active={bColorReviewWithPhoto}
        onClick={(e) => onHandleReview(e, 'WithPhoto', true)}
      >
        With Photo (2)
      </ReviewWrapper>
    </div>
    {openReview === 'All' ? (
      <div>
        {reviewAll.map((item) => (
          <Row key={item.review_id}>
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
          </Row>
        ))}
      </div>
    ) : (
      <div>
        {reviewWithPhoto.map((item) => (
          <Row key={item.review_id}>
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
              <ReviewImage src={item.review_image} alt="review" />
              <LineReview />
            </Col>
          </Row>
        ))}
      </div>
    )}
  </ContentWrapper>
);
Review.propTypes = {
  onHandleReview: PropTypes.func.isRequired,
  openReview: PropTypes.bool.isRequired,
  bColorReviewAll: PropTypes.bool.isRequired,
  bColorReviewWithPhoto: PropTypes.bool.isRequired,
  reviewAll: PropTypes.array.isRequired,
  reviewWithPhoto: PropTypes.array.isRequired,
};

export default Review;
