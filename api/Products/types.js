export default `
  type Product {
    _id: String
    isPublic: Boolean
    productName: String
    productDescription: String
    createdAt: String
    updatedAt: String
    owner: String
    productComments: [ProductComment]
  }
`;
