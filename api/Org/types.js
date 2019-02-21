import generalFields from '../general_fields';

export default `
  enum OrgType {
    Channel
    Company
    Other
  }

  enum OrgStatus {
    Draft
    Unverified
    Active
    Inactive
  }

  type Org {
    _id: String
    name: String
    phones: String
    files: [File]
    locations: [Location]
    products: [Product]
    members: [User]
    type: OrgType,
	  status: OrgStatus,
	  ${generalFields}
  }
`;
