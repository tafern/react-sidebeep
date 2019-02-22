import generalFields from '../general_fields';

export default `
  enum FileType {
    Image_Thumbnail
    Image_Detail
    Other
  }

  enum FileStatus {
    Draft
    Active
    Inactive
  }

  type File {
    ${generalFields}
    url: String
    size: Int
    mimeType: String
    type: FileType
    status: FileStatus
  }
`;
