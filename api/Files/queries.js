import Files from './Files';

export default {
  files: ({ _id }) => Files.find({ refferenceId: _id }, { sort: { createdAt: 1 } }).fetch(),
  file: (parent, args, context) =>
    Files.findOne({
      $or: [
        { _id: args._id, owner: context.user && context.user._id ? context.user._id : null },
        { _id: args._id, isPublic: true },
      ],
    }),
};
