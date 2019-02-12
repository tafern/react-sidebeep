import Headlines from './Headlines';

export default {
  headlines: () =>
    // context.user && context.user._id ? Headlines.find({ owner: context.user._id }).fetch() : [],
    Headlines.find({}).fetch(),
  headline: (parent, args) =>
    Headlines.findOne({
      $or: [{ _id: args._id }],
    }),
};
