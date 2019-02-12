import Images from './Images';

export default {
  addImage: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new file.');
    const date = new Date().toISOString();
    const imageId = Images.insert({
      isPublic: args.isPublic || false,
      fileId: args.fileId,
      imgUrl: args.imgUrl,
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Images.findOne(imageId);
    return doc;
  },
  updateImage: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a file.');
    if (!Images.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this file to update it.');
    Images.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          imgUrl: args.imgUrl,
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Images.findOne(args._id);
    return doc;
  },
  removeImage: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a file.');
    if (!Images.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this file to remove it.');
    Images.remove(args);
    return args;
  },
};
