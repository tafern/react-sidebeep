import Org from './Org';

export default {
  orgs: ({ _id }) => Org.find({ 'member._id': _id }).fetch(),
  org: (parent, args) => Org.findOne({ _id: args._id }),
};
