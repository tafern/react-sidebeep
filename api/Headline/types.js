import generalFields from '../general_fields';

export default `
  enum HeadlineType {
    Main
    Promo
    News
  }

  enum HeadlineStatus {
    Draft
    Active
    Inactive
  }

  type Headline {
    files: [File!]!
    type: HeadlineType
	  status: HeadlineStatus
    ${generalFields}
  }
`;
