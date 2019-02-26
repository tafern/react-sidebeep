import generalFields from '../general_fields';

export default `
  type TrxItem {
    ${generalFields}
    trx: Trx
    product: Product
    currency: CurrencyCode # FIXME ini bikin table sendiri, jadi bisa ada shortname dan longname
    unitPrice: Int
    qty: Int
    uom: String
    discount: Int
    subTotal: String # purposely redundanz (unitPrice * qty - discount = subTotal)
  }
`;
