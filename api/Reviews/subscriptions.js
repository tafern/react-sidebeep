import { withFilter } from 'apollo-server';

export default {
  reviewAdded: {
    subscribe: withFilter(
      (root, args, context) => context.pubsub.asyncIterator('reviewAdded'),
      (payload, variables) => payload.reviewAdded.productId === variables.productId,
    ),
  },
};
