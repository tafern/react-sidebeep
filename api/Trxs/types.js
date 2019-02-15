export default `
  type Trx {
    _id: String
    buyer: String
    seller: String
    trxItems: [TrxItem]
    currency: String
    subTotal: String
    total: String
    type: String
    status: String
    owner: String
    createdAt: String
    updatedAt: String
  }
`;
