import { withFilter } from 'apollo-server';

// FIXME harus dirubah, karena review hanya akan dipublish ke depan bila sudah diapproved oleh Org, sedangkan rating otomatis dihitung
export default {
  reviewAdded: {
    subscribe: withFilter(
      (root, args, context) => context.pubsub.asyncIterator('reviewAdded'),
      (payload, variables) => payload.reviewAdded.productId === variables.productId,
    ),
  },
};
