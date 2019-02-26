import TrxItems from './TrxItem';

// FIXME belum dibahas
export default {
  trxItems: () => TrxItems.find({}),
  trxItem: (parent, args) =>
    TrxItems.findOne({
      $or: [{ _id: args._id }],
    }),
};
