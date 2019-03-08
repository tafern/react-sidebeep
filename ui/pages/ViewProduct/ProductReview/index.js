import React from 'react';
import PropTypes from 'prop-types';
import ProductReviewList from '../Json/ProductReviewList';
import ProductReviewWithPhotoList from '../Json/ProductReviewWithPhotoList';
import Review from '../../../components/Review';

const productReviewDataList = ProductReviewList;
const productReviewWithPhotoDataList = ProductReviewWithPhotoList;
const ProductReview = ({ onHandleReview, openReview, bColorReviewAll, bColorReviewWithPhoto }) => (
  <div>
    <Review
      onHandleReview={onHandleReview}
      openReview={openReview}
      bColorReviewAll={bColorReviewAll}
      bColorReviewWithPhoto={bColorReviewWithPhoto}
      reviewAll={productReviewDataList}
      reviewWithPhoto={productReviewWithPhotoDataList}
    />
  </div>
);
ProductReview.propTypes = {
  onHandleReview: PropTypes.func.isRequired,
  openReview: PropTypes.bool.isRequired,
  bColorReviewAll: PropTypes.bool.isRequired,
  bColorReviewWithPhoto: PropTypes.bool.isRequired,
};

export default ProductReview;
