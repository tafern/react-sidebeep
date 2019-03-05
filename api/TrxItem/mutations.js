import { Meteor } from 'meteor/meteor';
import TrxItem from './TrxItem';
import Trx from '../Trx/Trx';
import Product from '../Product/Product';
import { configs } from '../App/configs/configs';
import queryProductOwner from './actions/queryProductOwner';

// FIXME belum dibahas
export default {
  addTrxItem: (root, args) => {
    // if (!context.user) throw new Error('Sorry, you must be logged in to add a new trx.');

    const date = new Date().toISOString();

    const product = Product.findOne({ _id: args.productId });
    if (!product) throw new Error('Sorry, product you search not found.');

    const userBuyer = Meteor.users.findOne(args.buyer);
    if (!userBuyer) throw new Error('Sorry, buyer that you search not found.');

    const userSeller = Meteor.users.findOne({ _id: product.userId });
    if (!userSeller) throw new Error('Sorry, seller that you search not found.');

    const checkTrx = Trx.findOne({
      $or: [
        { _id: args._id },
        {
          buyer: args.buyer,
          seller: args.seller,
          status:
            configs.trxs.status.open ||
            configs.trxs.status.wait_approval ||
            configs.trxs.status.approved,
        },
      ],
    });

    if (!checkTrx) {
      const trxId = Trx.insert({
        buyer: userBuyer._id,
        seller: userSeller._id,
        currency: 'IDR',
        status: configs.trxs.status.open,
        createdAt: date,
        updatedAt: date,
        subTotal: 1,
      });
      const trxItemsId = TrxItem.insert({
        trxId,
        productId: product._id,
        unitPrice: product.price,
        qty: args.qty,
        createdAt: date,
        updatedAt: date,
      });
      return TrxItem.findOne(trxItemsId);
    }

    if (
      TrxItem.findOne({
        $or: [{ trxId: checkTrx._id, productId: product._id }],
      })
    )
      throw new Error('Sorry, product already added in cart.');

    const checkRelevantOwner = queryProductOwner({
      productId: product._id,
      seller: checkTrx.seller,
    });

    if (checkRelevantOwner) {
      const trxItemsId = TrxItem.insert({
        trxId: checkTrx._id,
        productId: product._id,
        unitPrice: product.price,
        qty: args.qty,
        createdAt: date,
        updatedAt: date,
      });
      Trx.update(
        { _id: checkTrx._id },
        {
          $set: {
            ...args,
            qty: checkTrx.subTotal + 1,
            subTotal: checkTrx.subTotal + 1,
          },
        },
      );
      return TrxItem.findOne(trxItemsId);
    }
    throw new Error(
      `Sorry, you need to choose the relevant product from ${checkTrx.seller} stores.`,
    );
  },
  updateTrxItem: (root, args) => {
    // if (!context.user) throw new Error('Sorry, you must be logged in to update a trx.');
    if (!TrxItem.findOne({ _id: args._id }))
      throw new Error('Sorry, you need to be the owner of this trx to update it.');
    const finalSubTotal = args.unitPrice * args.qty;
    TrxItem.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          productId: args.productId,
          unitPrice: args.unitPrice,
          qty: args.qty,
          subTotal: finalSubTotal,
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = TrxItem.findOne(args._id);
    return doc;
  },
  removeTrxItem: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a trx.');
    if (!TrxItem.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this trx to remove it.');
    TrxItem.remove(args);
    return args;
  },
};
