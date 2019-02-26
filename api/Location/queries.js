import Location from './Location';

export default {
  orgLocations: ({ _id }) =>
    Location.find({ 'refs._id': _id, 'refs.type': 'Org', status: 'Active' }).fetch(),
  location: (parent, args) => Location.findOne({ _id: args._id }),
};
