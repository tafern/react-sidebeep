import Images from './Images';

export default {
  images: ({ _id }) => Images.find({ fileId: _id }, { sort: { createdAt: 1 } }).fetch(),
  image: (parent, args, context) =>
    Images.findOne({
      $or: [
        { _id: args._id, owner: context.user && context.user._id ? context.user._id : null },
        { _id: args._id, isPublic: true },
      ],
    }),
};
