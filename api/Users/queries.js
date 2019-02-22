import queryUsers from './actions/queryUsers';
import queryUser from './actions/queryUser';
import exportUserData from './actions/exportUserData';

export default {
  users: (parent, args, context) => {
    queryUsers({
      currentUser: context.user,
      search: args.search ? new RegExp(args.search, 'i') : null,
      limit: args.perPage,
      skip: args.currentPage * args.perPage - args.perPage,
      sort: {
        'profile.name.last': 1,
        'services.facebook.first_name': 1,
        'services.google.name': 1,
        'services.github.username': 1,
      },
    });
  },
  user: (parent, args, context) => {
    const userIdFromParentQuery = parent && parent.userId;
    return queryUser({
      userIdToQuery: userIdFromParentQuery || args._id || context.user._id,
    });
  },
  buyer: (parent) => {
    const userId = parent.buyer;
    return queryUser({
      userIdToQuery: userId,
    });
  },
  seller: (parent) => {
    const userId = parent.seller;
    return queryUser({
      userIdToQuery: userId,
    });
  },
  exportUserData: (parent, args, { user }) =>
    exportUserData({
      user,
    }),
};
