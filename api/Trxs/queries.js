import Trx from './Trxs';

export default {
  trxs: () => Trx.find({}),
  trx: (parent, args) =>
    Trx.findOne({
      $or: [{ _id: args._id }],
    }),
  // buyer: (parent, args) =>
  //   Users.findOne({
  //     $or: [{ _id: args._id }],
  //   }),
  // seller: (parent, args) =>
  //   Users.findOne({
  //     $or: [{ _id: args._id }],
  //   }),
};
