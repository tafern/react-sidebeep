import sanitizeHtml from 'sanitize-html';
import Org from './Org';

// FIXME belum dibahas!!!
export default {
  addOrg: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new document.');
    const date = new Date().toISOString();
    const orgId = Org.insert({
      isPublic: args.isPublic || false,
      name: args.name,
      description: args.description
        ? sanitizeHtml(args.description)
        : 'This is my product. There are many like it, but this one is mine.',
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Org.findOne(orgId);
    return doc;
  },
  updateOrg: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a org.');
    if (!Org.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Org.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          description: sanitizeHtml(args.description),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Org.findOne(args._id);
    return doc;
  },
  removeOrg: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a org.');
    if (!Org.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Org.remove(args);
    return args;
  },
};
