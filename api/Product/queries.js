import Product from './Product';

export default {
  products: () => Product.find({}).fetch(),
  product: (parent, args) =>
    Product.findOne({
      _id: args._id,
    }),
  orgProduct: (parent) =>
    Product.find({
      'owner._id': parent._id,
      'owner.type': 'Org',
    }).fetch(),
};
