import { withFilter } from 'apollo-server';

export default {
  productReviewAdded: {
    subscribe: withFilter(
      (root, args, context) => context.pubsub.asyncIterator('productReviewAdded'),
      (payload, variables) => payload.productReviewAdded.productId === variables.productId,
    ),
  },
};
