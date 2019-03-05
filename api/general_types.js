export default `
  enum CurrencyCode {
    IDR
    USD
    SGD
    EUR
  }

  type Ref {
    _id: String
    type: String
  }
  
  type Party {
    _id: String
    type: String  #Org or Member
    fullname: String
    url: String
  }
  
  type History{
    party: Party
    timestamp: String
    doc: String
    description: String
  }
`;
