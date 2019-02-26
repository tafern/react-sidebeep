import Review from './Review';

// FIXME harus dilimit ??? sort juga harus dirubah kali yah???
export default {
  reviews: ({ _id }) => Review.find({ productId: _id }, { sort: { createdAt: 1 } }).fetch(),
};
