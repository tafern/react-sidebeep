import sanitizeHtml from 'sanitize-html';
import Products from './Products';

export default {
  addProduct: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new document.');
    const date = new Date().toISOString();
    const productId = Products.insert({
      isPublic: args.isPublic || false,
      productName:
        args.productName ||
        `Untitled Product #${Products.find({ owner: context.user._id }).count() + 1}`,
      productDescription: args.productDescription
        ? sanitizeHtml(args.productDescription)
        : 'This is my product. There are many like it, but this one is mine.',
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Products.findOne(productId);
    return doc;
  },
  updateProduct: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a document.');
    if (!Products.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Products.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          productDescription: sanitizeHtml(args.productDescription),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Products.findOne(args._id);
    return doc;
  },
  removeProduct: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a product.');
    if (!Products.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Products.remove(args);
    return args;
  },
};
