import sanitizeHtml from 'sanitize-html';
import ProductComments from './ProductComments';
import { isAdmin } from '../Users/actions/checkIfAuthorized';

export default {
  addProductComment(root, args, context) {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new productComment.');

    const date = new Date().toISOString();
    const productCommentToInsert = {
      productId: args.productId,
      productComment: sanitizeHtml(args.productComment),
      userId: context.user._id,
      createdAt: date,
    };

    const productCommentId = ProductComments.insert(productCommentToInsert);
    context.pubsub.publish('productCommentAdded', {
      productCommentAdded: { _id: productCommentId, ...productCommentToInsert },
    });

    return { _id: productCommentId, ...productCommentToInsert };
  },
  removeComment(root, args, context) {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a productComment.');

    const productComment = ProductComments.findOne({ _id: args._id }, { fields: { userId: 1 } });

    if (!isAdmin(context.user._id) || productComment.userId !== context.user._id) {
      throw new Error('Sorry, you must be logged in to remove a productComment.');
    }

    ProductComments.remove(args._id);

    return { _id: args._id };
  },
};
