import sanitizeHtml from 'sanitize-html';
import Category from './Tag';

export default {
  addCategory: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new category.');
    const date = new Date().toISOString();
    const categoryId = Category.insert({
      isPublic: args.isPublic || false,
      name: args.name,
      description: args.description
        ? sanitizeHtml(args.description)
        : 'This is my category. There are many like it, but this one is mine.',
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Category.findOne(categoryId);
    return doc;
  },
  updateCategory: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a category.');
    if (!Category.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Category.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          description: sanitizeHtml(args.description),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Category.findOne(args._id);
    return doc;
  },
  removeCategory: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a headline.');
    if (!Category.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Category.remove(args);
    return args;
  },
};
