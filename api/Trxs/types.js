export default `
  type Trx {
    _id: String
    buyer: User
    seller: User
    trxItems: [TrxItem]
    currency: String
    subTotal: String
    total: String
    type: String
    status: String
    createdAt: String
    updatedAt: String
  }
`;
