import generalFields from '../general_fields';

export default `
  enum TrxType {
    Delivery
    Premise
    Other
  }

  enum TrxStatus {
    Draft
    Requested
    Active
    Paid
    Closed
  }

  type Trx {
    ${generalFields}
    buyer: Party
    seller: Party
    trxItems: [TrxItem] # subtotal should be calculated from here
    currency: CurrencyCode # FIXME ini bikin table sendiri, jadi bisa ada shortname dan longname
    discount: Int
    tax: Int
    total: Int
    payments: [Payment]
    type: TrxType
    status: TrxStatus
  }
`;
