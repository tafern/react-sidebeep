import Trx from './Trxs';
import queryUser from '../Users/actions/queryUser';

export default {
  trxs: () => Trx.find({}),
  trx: (parent, args) => {
    const trx = Trx.findOne({
      $or: [{ _id: args._id, buyer: args.buyer }],
    });
    if (!trx) throw new Error("Cant't found your request, that's all we know.");
    return trx;
  },
  buyer: (parent, args) => {
    const data = queryUser({ userIdToQuery: args._id });
    data.then((result) => {
      console.log('final : ', result);
    });
  },
};
