import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import Portfolio from '../../components/Portfolio';
import {
  ContentWrapper,
  MainContentWrapper,
  PortfolioWrapper,
  ProductTitle,
  ProductPrice,
  ProductLocationWrapper,
  IconImage,
  ProductRatingWrapper,
  ProductRating,
  IconRating,
  ProductCount,
  ProductLocationTitle,
  ProductBoxLocation,
  ProductLocationVisit,
  ProductLocationDescription,
  IconWrapper,
  IconShare,
  ShareTitle,
  IconWishlist,
  WishlistTitle,
  IconContainer,
  ButtonOrder,
} from './styles';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationTab: 'sider',
      activeSider: true,
      activeBeeper: false,
      activeLogistic: false,
    };
  }
  onChangeVisit = (e, location, active) => {
    if (location === 'sider') {
      this.setState({
        locationTab: location,
        activeSider: active,
        activeBeeper: false,
        activeLogistic: false,
      });
    } else if (location === 'beeper') {
      this.setState({
        locationTab: location,
        activeSider: false,
        activeBeeper: active,
        activeLogistic: false,
      });
    } else {
      this.setState({
        locationTab: location,
        activeSider: false,
        activeBeeper: false,
        activeLogistic: active,
      });
    }
  };
  render() {
    const { productName, files, price, viewCount, orderCount, addToCart } = this.props;
    let visitLocation = '';
    if (this.state.locationTab === 'sider') {
      visitLocation = 'Pada jasa ini Beeper akan datang ke lokasi Sider';
    } else if (this.state.locationTab === 'beeper') {
      visitLocation = 'Pada jasa ini Sider akan datang ke lokasi Beeper';
    } else {
      visitLocation =
        'Tim logistic Sidebeep akan menjemput dan mengantarkan kembali pesanan jasa Beeper';
    }
    console.log('sider', this.state.activeSider);
    console.log('beeper', this.state.activeBeeper);
    console.log('logistic', this.state.activeLogistic);
    return (
      <ContentWrapper>
        <Row>
          <MainContentWrapper sm={5}>
            <PortfolioWrapper>
              <Portfolio className="mr-3" files={files} />
            </PortfolioWrapper>
          </MainContentWrapper>
          <MainContentWrapper sm={7}>
            <ProductTitle>{productName}</ProductTitle>
            <ProductPrice>
              <NumberFormat
                value={price}
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                prefix="IDR "
              />{' '}
              / 3 Days
            </ProductPrice>
            <ProductLocationWrapper>
              <IconImage className="icon ion-md-locate" />
              Jakarta
            </ProductLocationWrapper>
            <ProductRatingWrapper className="clearfix">
              <ProductRating>
                <IconRating className="icon ion-md-star" /> 5
              </ProductRating>
              <ProductCount>
                (22 review) | {orderCount} orders | {viewCount} views
              </ProductCount>
            </ProductRatingWrapper>
            <ProductLocationTitle>Service Location</ProductLocationTitle>
            <ProductBoxLocation className="clearfix">
              <ProductLocationVisit
                active={this.state.activeSider}
                onClick={(e) => this.onChangeVisit(e, 'sider', true)}
              >
                Visit Sider Location
              </ProductLocationVisit>
              <ProductLocationVisit
                active={this.state.activeLogistic}
                onClick={(e) => this.onChangeVisit(e, 'logistic', true)}
              >
                Visit Logistic
              </ProductLocationVisit>
              <ProductLocationVisit
                active={this.state.activeBeeper}
                onClick={(e) => this.onChangeVisit(e, 'beeper', true)}
              >
                Visit Beeper Location
              </ProductLocationVisit>
            </ProductBoxLocation>
            <ProductLocationDescription>{visitLocation}</ProductLocationDescription>
            <IconWrapper className="clearfix">
              <IconContainer>
                <IconShare src="/img/icons/share-green.png" alt="share" />
                <ShareTitle>Share it</ShareTitle>
              </IconContainer>
              <IconContainer>
                <IconWishlist src="/img/icons/wishlist-green.png" alt="wishlist" />
                <WishlistTitle>Wishlist</WishlistTitle>
              </IconContainer>
            </IconWrapper>
            <div>
              <ButtonOrder bsStyle="primary" onClick={addToCart}>
                ORDER
              </ButtonOrder>
            </div>
          </MainContentWrapper>
        </Row>
      </ContentWrapper>
    );
  }
}

MainContent.propTypes = {
  productName: PropTypes.string.isRequired,
  files: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  viewCount: PropTypes.string.isRequired,
  orderCount: PropTypes.number.isRequired,
};

export default MainContent;
