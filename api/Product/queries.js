import Product from './Product';

export default {
  orgProducts: ({ _id }) =>
    Product.find({
      'owner._id': _id,
      'owner.type': 'Org',
      isPublic: true,
      status: 'Active',
    }).fetch(),
  product: (parent, args) =>
    Product.findOne({
      _id: args._id,
    }),
};
