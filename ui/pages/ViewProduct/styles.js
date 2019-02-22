import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Button, Col } from 'react-bootstrap';
import {
  SB_DARK_GREY,
  SB_GREEN,
  SB_GREY,
  SB_MEDIUM_GREY,
  SB_YELLOW,
  SB_WHITE,
  SB_LIGHT_GREY,
  SB_BLACK,
} from '../../../modules/styleConstants';

export const StyledViewProduct = styled.div``;
export const MainContentWrapper = styled(Col)`
  padding-right: 0;
  padding-left: 0;
`;
export const ProductBody = styled.div`
  font-size: 16px;
  line-height: 22px;

  > * {
    margin-bottom: 20px;
    white-space: pre-line;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 5px 8px 10px 8px;
  }
  border-radius: 5px;
  position: relative;
  margin: 10px 0;
`;

export const PortfolioWrapper = styled.div`
  position: relative;
`;

export const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
`;
export const ProductSeenOrderWrapper = styled.div``;
export const ProductSeenOrderImage = styled.img`
  background-size: cover;
  width: 25px;
  height: 20px;
  float: left;
  margin: 5px;
`;
export const ProductSeenOrder = styled.div`
  font-size: 12px;
  margin: 5px 15px;
  color: ${SB_MEDIUM_GREY};
  @media (max-width: 380px) {
    margin: 5px 0;
  }
`;
export const ProductDescription = styled.div`
  font-size: 14px;
`;
export const ProductDate = styled.div``;
export const ProductStatus = styled.div``;

export const FilterTabWrapper = styled(Tabs)`
  li {
    a {
      color: ${SB_MEDIUM_GREY};
    }
  }
  li.active {
    a {
      color: ${SB_MEDIUM_GREY};
      ${(props) => (props.activeKey ? `border-bottom: 3px solid ${SB_GREEN} !important` : '')};
    }
  }
  &:hover,
  &:focus {
    color: ${SB_MEDIUM_GREY};
  }
`;
export const FilterTab = styled(Tab)`
  color: ${SB_MEDIUM_GREY};
  &:hover {
    cursor: pointer;
  }
`;
export const ProductPrice = styled.div`
  color: ${SB_GREEN};
  font-size: 18px;
  margin-top: 5px;
`;
export const ProductLocationWrapper = styled.div`
  color: ${SB_GREY};
`;
export const IconImage = styled.i`
  color: ${SB_GREY};
  margin-right: 5px;
`;
export const ProductRatingWrapper = styled.div`
  color: ${SB_YELLOW};
`;
export const ProductRating = styled.p`
  float: left;
`;
export const IconRating = styled.i`
  color: ${SB_YELLOW};
  margin-right: 5px;
  font-size: 16px;
`;
export const ProductCount = styled.p`
  margin-left: 5px;
  color: ${SB_GREY};
  float: left;
  font-size: 14px;
`;
export const ProductLocationTitle = styled.div`
  color: ${SB_DARK_GREY};
  font-weight: bold;
  font-size: 14px;
`;
export const ProductLocationVisit = styled.div`
  color: ${SB_GREEN};
  font-size: 14px;
  font-weight: bold;
`;
export const ProductLocationDescription = styled.div`
  color: ${SB_GREY};
  font-size: 14px;
`;
export const IconWrapper = styled.div`
  margin: 15px 0;
`;
export const IconShare = styled.img`
  float: left;
  margin-right: 10px;
  color: ${SB_GREEN};
`;
export const ShareTitle = styled.div`
  font-size: 13px;
  color: ${SB_GREEN};
  float: left;
  margin-right: 40px;
  margin-top: 2px;
`;
export const IconWishlist = styled.img`
  color: ${SB_GREEN};
  float: left;
  margin-right: 10px;
  margin-top: 2px;
`;
export const WishlistTitle = styled.div`
  font-size: 13px;
  color: ${SB_GREEN};
  float: left;
  margin-top: 2px;
`;
export const ButtonChatSider = styled(Button)`
  border: 1px solid ${SB_GREEN};
  color: ${SB_GREEN};
  padding: 10px 58px;
  margin: 0 10px 0 0px;

  &:hover {
    background-color: ${SB_GREEN};
    color: ${SB_WHITE};
  }
`;
export const ButtonShoppingCart = styled(Button)`
  border: 1px solid ${SB_GREEN};
  color: ${SB_GREEN};
  font-size: 20px;
  padding: 6px 18px;
  margin: 0 20px 0 0px;
  &:hover {
    background-color: ${SB_GREEN};
    color: ${SB_WHITE};
  }
`;
export const ButtonOrder = styled(Button)`
  background-color: ${SB_GREEN};
  color: ${SB_WHITE};
  padding: 10px 100px;
  margin: 5px 0;
  border: 1px solid ${SB_GREEN};
  &:hover {
    background-color: ${SB_WHITE};
    color: ${SB_GREEN};
  }
`;

// Sider Content
export const SiderContainer = styled.div`
  max-width: 400px;
  margin: 10px;
  padding: 5px 20px 10px 20px;
  @media (max-width: 768px) {
    padding: 5px 8px 10px 8px;
  }
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  position: relative;
`;
export const SiderWrapper = styled.div`
  margin: 10px 0 5px 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
export const SiderImage = styled.img`
  width: 60px;
  border-radius: 50px;
`;
export const SiderName = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: ${SB_GREY};
`;
export const SiderRatingWrapper = styled.div`
  color: ${SB_YELLOW};
`;
export const SiderRating = styled.p`
  text-align: center;
`;
export const SiderCount = styled.p`
  margin-left: 5px;
  color: ${SB_GREY};
  text-align: center;
  font-size: 12px;
`;
export const SiderLine = styled.div`
  border: 1px solid ${SB_LIGHT_GREY};
  width: 185px;
  margin: 10px;
`;
export const SiderWrapInfo = styled.div`
  color: ${SB_GREY};
  padding-bottom: 5px;
`;
export const SiderIdentityImage = styled.img`
  width: 14px;
  float: left;
  margin-right: 5px;
  margin-top: 3px;
`;
export const SiderIdentityDesc = styled.div`
  color: ${SB_GREY};
`;
export const SiderDescription = styled(Link)`
  margin: 20px;
  color: ${SB_GREY};
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: ${SB_GREY};
  }
  .read-more-button {
    color: ${SB_GREEN};
    cursor: pointer;
  }
`;

// Working Hours
export const DayName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

// Rating / Review
export const ReviewWrapper = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: ${SB_BLACK};
  margin: 10px 5px;
`;
export const BeeperImage = styled.img`
  width: 50px;
  background-size: cover;
  border-radius: 50px;
`;
export const BeeperName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const RatingWrapper = styled.div``;
export const ReviewRating = styled.div``;
export const CreatedAt = styled.div`
  font-size: 12px;
  color: ${SB_GREY};
  margin-top: 2px;
`;
export const ReviewDescription = styled.div``;
export const LineReview = styled.div`
  border: 1px solid ${SB_LIGHT_GREY};
  width: 100%;
  margin: 15px 0;
`;
