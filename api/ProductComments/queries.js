import ProductComments from './ProductComments';

export default {
  productComments: ({ _id }) =>
    ProductComments.find({ productId: _id }, { sort: { createdAt: 1 } }).fetch(),
};
