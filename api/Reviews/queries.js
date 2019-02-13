import Reviews from './Reviews';

export default {
  reviews: ({ _id }) => Reviews.find({ productId: _id }, { sort: { createdAt: 1 } }).fetch(),
};
