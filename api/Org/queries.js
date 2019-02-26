import Org from './Org';

export default {
  orgs: () => Org.find({}),
  org: (parent, args) => Org.findOne({ _id: args._id }),
  orgUser: (parent, args) => Org.findOne({ 'members._id': args._id }),
};
