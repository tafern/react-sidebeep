import generalFields from '../general_fields';

export default `
  enum ReviewType {
    Member
    Other
  }

  enum ReviewStatus {
    Draft
    Unverified
    Active
    Inactive
  }

  type Review {
    ${generalFields}
    user: User
    productId: String
    rating: Int
  }
`;
