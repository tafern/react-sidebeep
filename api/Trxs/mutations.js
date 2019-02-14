import Trxs from './Trxs';

export default {
  addTrx: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new trx.');
    const date = new Date().toISOString();
    const trxId = Trxs.insert({
      createdAt: date,
      updatedAt: date,
    });
    const doc = Trxs.findOne(trxId);
    return doc;
  },
  updateTrx: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a trx.');
    if (!Trxs.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Trxs.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Trxs.findOne(args._id);
    return doc;
  },
  removeTrx: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a trx.');
    if (!Trxs.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Trxs.remove(args);
    return args;
  },
};
