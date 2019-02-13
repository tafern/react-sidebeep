import sanitizeHtml from 'sanitize-html';
import Posts from './Posts';

export default {
  addPost: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new post.');
    const date = new Date().toISOString();
    const postId = Posts.insert({
      isPublic: args.isPublic || false,
      title: args.title || `Untitled Post #${Posts.find({ owner: context.user._id }).count() + 1}`,
      description: args.description
        ? sanitizeHtml(args.description)
        : 'This is my post. There are many like it, but this one is mine.',
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Posts.findOne(postId);
    return doc;
  },
  updatePost: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a post.');
    if (!Posts.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this post to update it.');
    Posts.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          description: sanitizeHtml(args.description),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Posts.findOne(args._id);
    return doc;
  },
  removePost: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a post.');
    if (!Posts.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this post to remove it.');
    Posts.remove(args);
    return args;
  },
};
