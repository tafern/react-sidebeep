import generalFields from '../general_fields';

export default `
  enum ProductType {
    Service
    Physical
    Fee
    Other
  }

  enum ProductStatus {
    Draft
    Unverified
    Active
    Inactive
  }

  type Product {
    ${generalFields}
    price: Int
    currency: CurrencyCode # FIXME ini bikin table sendiri, jadi bisa ada shortname dan longname
    locations: [Location]
    files: [File]
    tags: [Tag]
    isPublic: Boolean
    countView: Int
    countMember: Int
    countTrxQty: Int
    countTrxAmount: Int
    avgRating: Int
    countReview: Int
    reviews: [Review] # FIXME last 10 reviews aja kali yah? sisanya logic tempat lain
    type: ProductType
	  status: ProductStatus
  }
`;
