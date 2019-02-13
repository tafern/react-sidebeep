import Posts from './Posts';

export default {
  posts: () => Posts.find({}).fetch(),
  post: (parent, args, context) =>
    Posts.findOne({
      $or: [
        { _id: args._id, owner: context.user && context.user._id ? context.user._id : null },
        { _id: args._id, isPublic: true },
      ],
    }),
};
