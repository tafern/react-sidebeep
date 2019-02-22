import Trx from './Trx';
import queryUser from '../Users/actions/queryUser';

// FIXME ini semua belum dibahas
export default {
  trxs: () => Trx.find({}),
  trx: (parent, args) =>
    Trx.findOne({
      $or: [{ _id: args._id }],
    }),
  buyer: (parent, args) => {
    console.log('args', args);
    const data = queryUser({ userIdToQuery: args._id });
    data.then((result) => {
      console.log('final : ', result);
    });
  },
};
