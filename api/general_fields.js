export default `
  _id: String
  name: String
  description: String
  owner: Party
  fromDate: String
  thruDate: String
  sequenceNr: Int
  refs: [Ref]
  histories: [History]
`;
