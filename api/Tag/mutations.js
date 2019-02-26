import sanitizeHtml from 'sanitize-html';
import Tag from './Tag';

export default {
  addTag: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new tag.');
    const date = new Date().toISOString();
    const tagId = Tag.insert({
      isPublic: args.isPublic || false,
      name: args.name,
      description: args.description
        ? sanitizeHtml(args.description)
        : 'This is my tag. There are many like it, but this one is mine.',
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Tag.findOne(tagId);
    return doc;
  },
  updateTag: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a tag.');
    if (!Tag.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Tag.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          description: sanitizeHtml(args.description),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Tag.findOne(args._id);
    return doc;
  },
  removeTag: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a headline.');
    if (!Tag.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Tag.remove(args);
    return args;
  },
};
