import generalFields from '../general_fields';

export default `
  type TrxItem {
    ${generalFields}
    trxId: String
    product: Product
    currency: CurrencyCode # FIXME ini bikin table sendiri, jadi bisa ada shortname dan longname
    unitPrice: Int
    qty: Int
    discount: Int
    subTotal: String # purposely redundanz (unitPrice * qty - discount = subTotal)
  }
`;
