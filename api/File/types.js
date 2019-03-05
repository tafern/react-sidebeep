import generalFields from '../general_fields';

export default `
  enum FileType {
    Image_Thumbnail
    Image_Detail
    Image_Cover_Thumbnail
    Image_Cover_Detail
    Image_Portfolio_Thumbnail
    Image_Portfolio_Detail
    Image_Profile_Thumbnail
    Image_Profile_Detail
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
