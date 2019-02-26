import Tag from './Tag';

// FIXME logicc masih harus dirubah semuanya. ini hanya biar bisa compile
export default {
  tags: () => Tag.find({ status: 'Active' }).fetch(),
  tag: (parent, args) =>
    Tag.findOne({
      _id: args._id,
    }),
};
