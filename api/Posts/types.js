export default `
  type Post {
    _id: String
    isPublic: Boolean
    title: String
    synopsis: String
    description: String
    files: [File]
    user: User
    createdAt: String
    updatedAt: String
  }
`;
