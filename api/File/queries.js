import File from './File';

export default {
  orgFiles: ({ _id }) =>
    File.find({ 'refs._id': _id, 'refs.type': 'Org', status: 'Active' }).fetch(),
  productFiles: ({ _id }) =>
    File.find({ 'refs._id': _id, 'refs.type': 'Product', status: 'Active' }).fetch(),
  headlineFiles: ({ _id }) =>
    File.find({ 'refs._id': _id, 'refs.type': 'Headline', status: 'Active' }).fetch(),
  tagFiles: ({ _id }) =>
    File.find({ 'refs._id': _id, 'refs.type': 'Tag', status: 'Active' }).fetch(),
  userFiles: ({ _id }) =>
    File.find({ 'refs._id': _id, 'refs.type': 'User', status: 'Active' }).fetch(),
  file: (parent, args) => File.findOne({ _id: args._id }),
};
