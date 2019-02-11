import Orgs from './Orgs';

export default {
  orgs: () =>
    // context.user && context.user._id ? Orgs.find({ owner: context.user._id }).fetch() : [],
    Orgs.find({}).fetch(),
  org: (parent, args) =>
    Orgs.findOne({
      $or: [{ _id: args._id }],
    }),
};
