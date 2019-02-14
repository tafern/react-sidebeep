import Trx from './Trxs';

export default {
  trxs: ({ id }) => Trx.find({ _id: id }, { sort: { createdAt: 1 } }).fetch(),
  trx: (parent, args) =>
    Trx.findOne({
      $or: [{ _id: args._id }],
    }),
};
