import sanitizeHtml from 'sanitize-html';
import Orgs from './Orgs';

export default {
  addOrg: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new document.');
    const date = new Date().toISOString();
    const orgId = Orgs.insert({
      isPublic: args.isPublic || false,
      name: args.name,
      description: args.description
        ? sanitizeHtml(args.description)
        : 'This is my product. There are many like it, but this one is mine.',
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Orgs.findOne(orgId);
    return doc;
  },
  updateOrg: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a org.');
    if (!Orgs.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Orgs.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          description: sanitizeHtml(args.description),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Orgs.findOne(args._id);
    return doc;
  },
  removeOrg: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a org.');
    if (!Orgs.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Orgs.remove(args);
    return args;
  },
};
