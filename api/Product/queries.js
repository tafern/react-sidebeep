import Product from './Product';

export default {
  products: () => Product.find({}).fetch(),
  product: (parent, args) =>
    Product.findOne({
      _id: args._id,
    }),
  orgProducts: (parent) =>
    Product.find({
      'owner._id': parent._id,
      'owner.type': 'Org',
    }).fetch(),
};
