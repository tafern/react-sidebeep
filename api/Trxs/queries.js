import Trx from './Trxs';
import queryUser from '../Users/actions/queryUser';

export default {
  trxs: () => Trx.find({}),
  trx: (parent, args) =>
    Trx.findOne({
      $or: [{ _id: args._id }],
    }),
  buyer: (parent, args) => {
    const data = queryUser({ userIdToQuery: args._id });
    data.then((result) => {
      console.log('final : ', result);
    });
  },
};
