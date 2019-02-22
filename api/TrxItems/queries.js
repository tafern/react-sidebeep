import TrxItems from './TrxItems';

export default {
  trxItems: () => TrxItems.find({}),
  trxItem: (parent, args) =>
    TrxItems.findOne({
      $or: [{ _id: args._id }],
    }),
};
