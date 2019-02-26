import Headline from './Headline';

export default {
  headlines: () => Headline.find({ status: 'Active' }).fetch(),
  headline: (parent, args) => Headline.findOne({ _id: args._id }),
};
