import Orgs from './Orgs';

export default {
  orgs: () => Orgs.find({}).fetch(),
  org: (parent, args) =>
    Orgs.findOne({
      $or: [{ _id: args._id }],
    }),
};
