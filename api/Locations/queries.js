import Locations from './Locations';

export default {
  locations: (parent, args, context) =>
    context.user && context.user._id ? Locations.find({ owner: context.user._id }).fetch() : [],
  location: (parent, args, context) =>
    Locations.findOne({
      $or: [
        { _id: args._id, owner: context.user && context.user._id ? context.user._id : null },
        { _id: args._id, isPublic: true },
      ],
    }),
};
