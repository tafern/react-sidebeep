import React from 'react';
import PropTypes from 'prop-types';
import {
  CartContainer,
  Summary,
  SiderWrapper,
  IconRating,
  SiderImage,
  SiderName,
  SiderRating,
  RatingWrapper,
  ProductCount,
  CartLine,
  CartPriceWrapper,
  CartPriceTitle,
  CartTotalPrice,
  ButtonCheckout,
} from './styles';

class CartSidebar extends React.Component {
  componentDidMount() {
    // const { siderId } = this.props;
    // this.props.fetchCartInfo(siderId);
  }
  render() {
    const { onCheckout, onSiderDetailClicked } = this.props;
    return (
      <CartContainer>
        <Summary>Summary</Summary>
        <CartLine />
        <SiderWrapper onClick={onSiderDetailClicked}>
          <SiderImage src="/img/logo-sider/shoesandcare.jpg" alt="siderImage" />
          <SiderName>SHOES AND CARE (SENAYAN)</SiderName>
        </SiderWrapper>
        <RatingWrapper className="clearfix">
          <SiderRating>
            <IconRating className="icon ion-md-star" /> 5
          </SiderRating>
          <ProductCount>(22 review)</ProductCount>
        </RatingWrapper>
        <CartPriceWrapper className="clearfix">
          <CartPriceTitle>Total Price</CartPriceTitle>
          <CartTotalPrice>IDR 4.000.000</CartTotalPrice>
        </CartPriceWrapper>
        <ButtonCheckout bsStyle="primary" onClick={onCheckout}>
          Checkout
        </ButtonCheckout>
      </CartContainer>
    );
  }
}
CartSidebar.propTypes = {
  onCheckout: PropTypes.func.isRequired,
  onSiderDetailClicked: PropTypes.func.isRequired,
};

export default CartSidebar;
