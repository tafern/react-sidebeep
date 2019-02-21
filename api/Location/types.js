import generalFields from '../general_fields';

export default `
  enum LocationType {
    Home
    Office
    Other
  }

  enum LocationStatus {
    Draft
    Active
    Inactive
  }

  type Location {
    _id: String
    address: String
    zipcode: String
    city: String
    area: String
    province: String
    country: String
    latitude: String
    longitude: String
    type: LocationType
    status: LocationStatus
    ${generalFields}
  }
`;
