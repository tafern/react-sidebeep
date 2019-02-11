import sanitizeHtml from 'sanitize-html';
import ProductReviews from './ProductReviews';
import { isAdmin } from '../Users/actions/checkIfAuthorized';

export default {
  addProductReview(root, args, context) {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new productReview.');

    const date = new Date().toISOString();
    const productReviewToInsert = {
      productId: args.productId,
      productReview: sanitizeHtml(args.productReview),
      userId: context.user._id,
      createdAt: date,
    };

    const productReviewId = ProductReviews.insert(productReviewToInsert);
    context.pubsub.publish('productReviewAdded', {
      productReviewAdded: { _id: productReviewId, ...productReviewToInsert },
    });

    return { _id: productReviewId, ...productReviewToInsert };
  },
  removeProductReview(root, args, context) {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a productReview.');

    const productReview = ProductReviews.findOne({ _id: args._id }, { fields: { userId: 1 } });

    if (!isAdmin(context.user._id) || productReview.userId !== context.user._id) {
      throw new Error('Sorry, you must be logged in to remove a productReview.');
    }

    ProductReviews.remove(args._id);

    return { _id: args._id };
  },
};
