import { withFilter } from 'apollo-server';

export default {
  productCommentAdded: {
    subscribe: withFilter(
      (root, args, context) => context.pubsub.asyncIterator('productCommentAdded'),
      (payload, variables) => payload.productCommentAdded.productId === variables.productId,
    ),
  },
};
