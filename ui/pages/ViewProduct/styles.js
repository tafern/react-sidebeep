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
  SB_DARK_GREEN,
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
export const ContentContainer = styled.div`
  margin-bottom: 20px;
`;
export const TitleDescription = styled.div`
  color: ${SB_MEDIUM_GREY};
  font-weight: bold;
  font-size: 16px;
`;
export const Description = styled.div`
  color: ${SB_MEDIUM_GREY};
  font-size: 14px;
  text-align: justify;
`;
export const PointDescripionWrapper = styled.ul`
  list-style-position: outside;
  margin-left: -25px;
`;
export const PointDescripion = styled.li`
  color: ${SB_MEDIUM_GREY};
  font-size: 14px;
  text-align: justify;
`;
export const PortfolioWrapper = styled.div`
  position: relative;
`;
export const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  color: ${SB_DARK_GREY};
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
  color: ${SB_DARK_GREY};
`;
export const IconImage = styled.i`
  color: ${SB_GREY};
  margin-right: 5px;
`;
export const ProductRatingWrapper = styled.div`
  color: ${SB_YELLOW};
  margin-bottom: 5px;
`;
export const ProductRating = styled.p`
  float: left;
`;
export const IconRating = styled.i`
  color: ${SB_YELLOW};
  font-size: 16px;
`;
export const IconSiderRating = styled.img`
  width: 25px;
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
export const ProductBoxLocation = styled.div`
  margin: 5px 0;
`;
export const ProductLocationVisit = styled.div`
  color: ${SB_GREEN};
  font-size: 14px;
  font-weight: bold;
  float: left;
  margin-right: 10px;
  cursor: pointer;
  padding: 0 10px;
  ${(props) =>
    props.active
      ? `box-shadow: 1px 5px 7px -4px ${SB_GREY}; border-radius: 3px; padding: 10px;`
      : 'margin-top: 10px'};
  &:hover {
    box-shadow: 1px 5px 7px -4px ${SB_GREY};
    border-radius: 3px;
    padding: 10px;
    margin-top: 0;
  }
`;
export const ProductLocationDescription = styled.div`
  color: ${SB_GREY};
  font-size: 14px;
`;
export const PortfolioImage = styled.img`
  background-size: cover;
  margin: 0 auto;
  width: 92%;
  border-radius: 3px;
`;
export const BlockGrid = styled.div`
  float: left;
  width: 19.3333%;
  @media (max-width: 1198px) {
    width: 24.333%;
  }
  @media (max-width: 990px) {
    width: 33.333%;
  }
  @media (max-width: 744px) {
    width: 33%;
  }
  @media (max-width: 638px) {
    width: 50%;
  }
  @media (max-width: 478px) {
    width: 50%;
  }
`;
export const IconWrapper = styled.div`
  margin: 15px 0;
`;
export const IconContainer = styled.div`
  float: left;
  cursor: pointer;
`;
export const IconShare = styled.img`
  float: left;
  margin-right: 10px;
  color: ${SB_GREEN};
`;
export const ShareTitle = styled.div`
  float: left;
  font-size: 13px;
  color: ${SB_GREEN};
  margin-right: 40px;
  margin-top: 2px;
`;
export const IconWishlist = styled.img`
  float: left;
  color: ${SB_GREEN};
  margin-right: 10px;
  margin-top: 2px;
`;
export const WishlistTitle = styled.div`
  float: left;
  font-size: 13px;
  color: ${SB_GREEN};
  margin-top: 2px;
`;
export const ButtonChatSider = styled(Button)`
  border: 1px solid ${SB_GREEN};
  color: ${SB_GREEN};
  padding: 10px 58px;
  margin: 15px 10px 0px 0px;
  width: 100%;

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
    background-color: ${SB_DARK_GREEN};
    border: 1px solid ${SB_DARK_GREEN};
    color: ${SB_WHITE};
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
export const SiderWrapper = styled(Link)`
  margin: 10px 0 5px 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
export const SiderImage = styled.img`
  width: 60px;
  border-radius: 50px;
  margin-top: 15px;
`;
export const SiderName = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${SB_DARK_GREY};
`;
export const SiderRatingWrapper = styled.div`
  color: ${SB_YELLOW};
`;
export const SiderRating = styled.p`
  text-align: center;
  margin: 5px 0 10px !important;
`;
export const SiderCount = styled.p`
  margin-left: 5px;
  color: ${SB_GREY};
  text-align: center;
  font-size: 12px;
`;
export const SiderLine = styled.div`
  border: 1px solid ${SB_LIGHT_GREY};
  width: 100%;
  margin: 10px 0;
`;
export const SiderWrapInfo = styled.div`
  color: ${SB_GREY};
  padding-bottom: 5px;
`;
export const InfoTitleSidebar = styled.div`
  font-size: 14px;
  float: left;
`;
export const InfoSidebar = styled.div`
  font-size: 14px;
  float: right;
  color: ${SB_MEDIUM_GREY};
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
  background-color: ${SB_GREEN};
  color: ${SB_WHITE};
  border-radius: 3px;
  text-align: center;
  padding: 5px 0;
  width: 70%;
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

// Information Description
export const AdditionalWrapper = styled.div`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid ${SB_MEDIUM_GREY};
  border-radius: 5px;
  width: 60%;
`;
export const AdditionalTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  float: left;
  margin-right: 10px;
`;
export const AdditionalPrice = styled.div`
  font-size: 14px;
  float: left;
`;
export const AdditionalDescription = styled.div`
  font-size: 13px;
`;
