import sanitizeHtml from 'sanitize-html';
import Reviews from './Review';
import { isAdmin } from '../Users/actions/checkIfAuthorized';

// FIXME belum dibahas!!!
export default {
  addReview(root, args, context) {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new review.');

    const date = new Date().toISOString();
    const reviewToInsert = {
      productId: args.productId,
      review: sanitizeHtml(args.review),
      userId: context.user._id,
      createdAt: date,
    };

    const reviewId = Reviews.insert(reviewToInsert);
    context.pubsub.publish('reviewAdded', {
      reviewAdded: { _id: reviewId, ...reviewToInsert },
    });

    return { _id: reviewId, ...reviewToInsert };
  },
  removeReview(root, args, context) {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a review.');

    const review = Reviews.findOne({ _id: args._id }, { fields: { userId: 1 } });

    if (!isAdmin(context.user._id) || review.userId !== context.user._id) {
      throw new Error('Sorry, you must be logged in to remove a review.');
    }

    Reviews.remove(args._id);

    return { _id: args._id };
  },
};
