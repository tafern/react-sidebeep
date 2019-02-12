export default `
  type Product {
    _id: String
    orgId: String
    isPublic: Boolean
    name: String
    description: String
    files: [File]
    category: [Category]
    createdAt: String
    updatedAt: String
    productReviews: [ProductReview]
  }
`;
