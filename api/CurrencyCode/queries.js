import CurrencyCode from './CurrencyCode';

export default {
  currencyCodes: ({ _id }) => CurrencyCode.find({ _id }).fetch(),
  currencyCode: (parent, args) => CurrencyCode.findOne({ _id: args._id }),
};
