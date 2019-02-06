import Products from './Products';

export default {
  products: (parent, args, context) =>
    context.user && context.user._id ? Products.find({ owner: context.user._id }).fetch() : [],
  product: (parent, args, context) =>
    Products.findOne({
      $or: [
        { _id: args._id, owner: context.user && context.user._id ? context.user._id : null },
        { _id: args._id, isPublic: true },
      ],
    }),
};
