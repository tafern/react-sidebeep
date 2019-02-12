import Category from './Categories';

export default {
  categories: () =>
    // context.user && context.user._id ? Category.find({ owner: context.user._id }).fetch() : [],
    Category.find({}).fetch(),
  category: (parent, args) =>
    Category.findOne({
      $or: [{ _id: args._id }],
    }),
};
