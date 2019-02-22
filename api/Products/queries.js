import Products from './Products';

export default {
  products: () => Products.find({}),
  product: (parent, args) =>
    Products.findOne({
      $or: [{ _id: args._id }],
    }),
  productTrxItem: ({ productId }) => Products.findOne(productId),
};
