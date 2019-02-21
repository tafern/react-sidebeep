export default `
  type Org {
    _id: String
    name: String
    description: String
    phones: String
    files: [File]
    locations: [Location]
    products: [Product]
    users: [User]
    type: String,
	  status: String,
    owner: String
    createdAt: String
    updatedAt: String
  }
`;
