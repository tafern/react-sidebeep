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
