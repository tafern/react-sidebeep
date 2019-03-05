import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { Sticky, StickyContainer } from 'react-sticky';
import { compose, graphql } from 'react-apollo';
import { StyledCart } from './styles';
import CartData from './Cart';
import CartSidebar from './CartSidebar';
import CartForm from './CartForm';
import OtherProduct from '../OtherProduct';
import BlankState from '../../components/BlankState';
import { trxs as trxsQuery } from '../../queries/Trx.gql';
import { products as productsQuery } from '../../queries/Product.gql';

class Cart extends React.Component {
  componentWillMount() {}
  render() {
    const { trxsDataQuery, productsDataQuery } = this.props;
    const trxs = CartData;
    return (
      <StyledCart>
        <Row>
          {trxsDataQuery.trxs !== undefined && trxsDataQuery.trxs.length > 0 ? (
            <div>
              <Col md={9}>
                <CartForm data={trxsDataQuery} trxs={trxs} />
              </Col>
              <Col md={3}>
                <StickyContainer style={{ height: '100%' }}>
                  <Sticky topOffset={-105}>
                    {({ style, isSticky }) => (
                      <div style={style}>
                        {isSticky ? <div style={{ height: '95px' }} /> : ''}
                        <CartSidebar />
                      </div>
                    )}
                  </Sticky>
                </StickyContainer>
              </Col>
            </div>
          ) : (
            <BlankState
              icon={{ style: 'solid', symbol: 'file-alt' }}
              title="Empty Services, Please Add to Cart of Service"
              subtitle="Add your first product by clicking the button below."
            />
          )}
          <Col md={12}>
            <OtherProduct productsDataQuery={productsDataQuery} />
          </Col>
        </Row>
      </StyledCart>
    );
  }
}
Cart.propTypes = {
  trxsDataQuery: PropTypes.object.isRequired,
  productsDataQuery: PropTypes.object.isRequired,
};
export default compose(
  graphql(trxsQuery, {
    name: 'trxsDataQuery',
  }),
  graphql(productsQuery, {
    name: 'productsDataQuery',
  }),
)(Cart);
