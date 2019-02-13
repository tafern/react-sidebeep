import Locations from './Locations';

export default {
  locations: ({ _id }) => Locations.find({ orgId: _id }, { sort: { createdAt: 1 } }).fetch(),
  location: (parent, args) =>
    Locations.findOne({
      $or: [{ _id: args._id }],
    }),
};
