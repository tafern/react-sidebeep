import TrxItems from './TrxItems';

export default {
  trxItems: ({ _id }) => TrxItems.find({ trxId: _id }, { sort: { createdAt: 1 } }).fetch(),
  trxItem: (parent, args) =>
    TrxItems.findOne({
      $or: [{ _id: args._id }],
    }),
};
