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
import { trxs as trxsQuery } from '../../queries/Trxs.gql';
import { products as productsQuery } from '../../queries/Products.gql';

class Cart extends React.Component {
  componentWillMount() {}
  render() {
    const { trxsDataQuery, productsDataQuery } = this.props;
    const trxs = CartData;
    return (
      <StyledCart>
        <Row>
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
