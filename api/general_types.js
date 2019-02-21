export default `
  type Ref {
    _id: String
    type: String
  }
  
  type Party {
    _id: String
    type: String  #Org or Member
    fullname: String
  }
  
  type History{
    party: Party
    timestamp: String
    doc: String
    description: String
  }
`;
