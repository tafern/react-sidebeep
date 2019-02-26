import sanitizeHtml from 'sanitize-html';
import CurrencyCode from './CurrencyCode';

// FIXME belum dibahas!!!
export default {
  addCurrencyCode: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new document.');
    const date = new Date().toISOString();
    const currencyCodeId = CurrencyCode.insert({
      isPublic: args.isPublic || false,
      name: args.name,
      description: args.description
        ? sanitizeHtml(args.description)
        : 'This is my product. There are many like it, but this one is mine.',
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = CurrencyCode.findOne(currencyCodeId);
    return doc;
  },
  updateCurrencyCode: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a currencyCode.');
    if (!CurrencyCode.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    CurrencyCode.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          description: sanitizeHtml(args.description),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = CurrencyCode.findOne(args._id);
    return doc;
  },
  removeCurrencyCode: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a currencyCode.');
    if (!CurrencyCode.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    CurrencyCode.remove(args);
    return args;
  },
};
