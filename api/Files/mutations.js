import sanitizeHtml from 'sanitize-html';
import Files from './Files';

export default {
  addFile: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to add a new file.');
    const date = new Date().toISOString();
    const fileId = Files.insert({
      refId: args.refId,
      fileUrl: args.fileUrl,
      owner: context.user._id,
      createdAt: date,
      updatedAt: date,
    });
    const doc = Files.findOne(fileId);
    return doc;
  },
  updateFile: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to update a file.');
    if (!Files.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this file to update it.');
    Files.update(
      { _id: args._id },
      {
        $set: {
          ...args,
          fileUrl: sanitizeHtml(args.fileUrl),
          updatedAt: new Date().toISOString(),
        },
      },
    );
    const doc = Files.findOne(args._id);
    return doc;
  },
  removeFile: (root, args, context) => {
    if (!context.user) throw new Error('Sorry, you must be logged in to remove a file.');
    if (!Files.findOne({ _id: args._id, owner: context.user._id }))
      throw new Error('Sorry, you need to be the owner of this file to remove it.');
    Files.remove(args);
    return args;
  },
};
