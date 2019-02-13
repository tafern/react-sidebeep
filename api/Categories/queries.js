import Category from './Categories';

export default {
  categories: () => Category.find({}).fetch(),
  category: (parent, args) =>
    Category.findOne({
      $or: [{ _id: args._id }],
    }),
};
