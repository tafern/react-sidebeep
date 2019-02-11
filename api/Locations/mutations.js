import Locations from './Locations';

export default {
  addLocation: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new document.');
    const date = new Date().toISOString();
    const locationId = Locations.insert({
      isPublic: args.isPublic || false,
      address: args.description,
      postcode: args.description,
      city: args.description,
      province: args.description,
      latitude: args.description,
      longitude: args.description,
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Locations.findOne(locationId);
    return doc;
  },
  updateLocation: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a location.');
    if (!Locations.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to update it.');
    Locations.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          address: args.description,
          postcode: args.description,
          city: args.description,
          province: args.description,
          latitude: args.description,
          longitude: args.description,
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Locations.findOne(args._id);
    return doc;
  },
  removeLocation: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a location.');
    if (!Locations.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this document to remove it.');
    Locations.remove(args);
    return args;
  },
};
