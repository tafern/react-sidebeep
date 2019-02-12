export default `
  type Product {
    _id: String
    orgId: String
    isPublic: Boolean
    name: String
    description: String
    price: Int
    locations: [Location]
    files: [File]
    categories: [Category]
    viewCount: Int
    orderCount: Int
    type: String,
	  status: String,
    createdAt: String
    updatedAt: String
    productReviews: [ProductReview]
  }
`;
