import generalFields from '../general_fields';

export default `
  enum TagStatus {
    Draft
    Active
    Inactive
  }

  type Tag {
    ${generalFields}
    files: [File]
    count: Int
    type: String # karena bisa banyak banget sesuai kebutuhan
	  status: TagStatus
  }
`;
