import ProductReviews from './ProductReviews';

export default {
  productReviews: ({ _id }) =>
    ProductReviews.find({ productId: _id }, { sort: { createdAt: 1 } }).fetch(),
};
