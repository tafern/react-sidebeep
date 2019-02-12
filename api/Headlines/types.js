export default `
  type Headline {
    _id: String
    name: String
    description: String
    files: [File]
    type: String,
	  status: String,
    owner: String
    createdAt: String
    updatedAt: String
  }
`;
