import Files from './File';

export default {
  productFiles: ({ _id }) =>
    File.find({ 'refs._id': _id, 'refs.type': 'Product', status: 'Active' }).fetch(),
  headlineFiles: ({ _id }) =>
    File.find({ 'refs._id': _id, 'refs.type': 'Headline', status: 'Active' }).fetch(),
  file: (parent, args) => Files.findOne({ _id: args._id }),
};
