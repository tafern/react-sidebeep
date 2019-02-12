import sanitizeHtml from 'sanitize-html';
import Headlines from './Headlines';

export default {
  addHeadline: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new headline.');
    const date = new Date().toISOString();
    const headlineId = Headlines.insert({
      isPublic: args.isPublic || false,
      name: args.name,
      description: args.description
        ? sanitizeHtml(args.description)
        : 'This is my product. There are many like it, but this one is mine.',
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Headlines.findOne(headlineId);
    return doc;
  },
  updateHeadline: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a headline.');
    if (!Headlines.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Headlines.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          description: sanitizeHtml(args.description),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Headlines.findOne(args._id);
    return doc;
  },
  removeHeadline: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a headline.');
    if (!Headlines.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Headlines.remove(args);
    return args;
  },
};
