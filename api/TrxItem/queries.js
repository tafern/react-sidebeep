import TrxItem from './TrxItem';

// FIXME belum dibahas
export default {
  trxItems: () => TrxItem.find({}),
  trxItem: (parent, args) =>
    TrxItem.findOne({
      $or: [{ _id: args._id }],
    }),
};
