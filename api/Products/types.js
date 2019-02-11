export default `
  type Product {
    _id: String
    orgId: String
    isPublic: Boolean
    name: String
    description: String
    files: [File]
    createdAt: String
    updatedAt: String
    productReviews: [ProductReview]
  }
`;
