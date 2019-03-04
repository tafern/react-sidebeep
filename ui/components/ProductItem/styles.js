import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  SB_GREY,
  SB_MEDIUM_GREY,
  SB_PURPLE,
  SB_GREEN,
  SB_YELLOW,
  SB_BLACK,
  SB_WHITE,
} from '../../../modules/styleConstants';

const ProductItemWrapper = styled(Link)`
  width: 100%;
  padding: 5px;
  display: inline-block;
  height: auto;
  margin-bottom: 0px;
  text-decoration: none;
  color: ${SB_PURPLE};

  &:hover {
    cursor: pointer;
    box-shadow: 5px grey;
    text-decoration: none;
  }
`;
const HeaderContentWrapper = styled.div`
  position: relative;
  &:hover {
    box-shadow: 0px 0px 7px -3px ${SB_BLACK};
    border-radius: 3px;
  }
`;
const ProductImage = styled.img`
  border-radius: 3px;
  background-size: 100% 100%;
  height: ${(props) => {
    if (props.isSmall) {
      return '178px';
    }
    if (props.isGrid) {
      return '210px';
    }
    return '270px';
  }};
  width: ${(props) => {
    if (props.isSmall) {
      return '100%';
    }
    if (props.isGrid) {
      return '100%';
    }
    return '100%';
  }};
  @media (max-width: 380px) {
    height: 145px;
  }
`;
const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0px solid ${SB_GREY};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px 4px 0 4px;
  border-top: 0;
  @media (max-width: 680px) {
    padding: 5px 0;
  }
`;
const SiderWrapper = styled(Link)`
  margin: 2px 0;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
const SiderImage = styled.img`
  width: ${(props) => (props.isSmall ? '25px' : '30px')};
  float: left;
  border-radius: 50px;
  border: 1px solid ${SB_GREY};
`;
const SiderName = styled.div`
  font-size: ${(props) => (props.isSmall || props.isGrid ? '10px' : '12px')};
  margin: ${(props) => (props.isSmall || props.isGrid ? '3px 0 0 30px' : '0 30px')};
  padding: ${(props) => (props.isSmall ? '0' : '5px')};
  color: ${SB_GREY};
`;
const ProductName = styled.div`
  margin-top: 5px;
  color: ${SB_MEDIUM_GREY};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;
const ProductPrice = styled.div`
  color: ${SB_GREEN};
  font-size: 14px;
`;
const ProductLocationWrapper = styled.div`
  color: ${SB_GREY};
  font-size: 12px;
`;
const IconLocation = styled.i`
  color: ${SB_GREY};
  margin-right: 5px;
  font-size: 14px !important;
`;
const ProductRatingWrapper = styled.div`
  color: ${SB_YELLOW};
`;
const ProductRating = styled.p`
  float: left;
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;
const IconRating = styled.i`
  color: ${SB_YELLOW};
  margin-right: 5px;
  font-size: 16px;
  @media (max-width: 380px) {
    margin-right: 2px;
  }
`;
const ProductCount = styled.p`
  margin-left: 5px;
  color: ${SB_GREY};
  float: left;
  font-size: 12px;
  margin-top: 1px;
  @media (max-width: 380px) {
    font-size: 10px;
    margin-top: 2px;
  }
`;

// Hover
const HoverDataWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  &:hover {
    .iconHoverWrapper {
      margin-top: 0;
    }
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  margin-top: -60px;
  transition: linear 0.3s;
  -webkit-transition: linear 0.3s;
  cursor: pointer;
  background-color: ${SB_BLACK};
  opacity: 0.5;
  width: 100%;
`;
const BoxWrapper = styled.div``;
const IconCountImage = styled.img`
  display: inline !important
  width: ${(props) => (props.isGrid || props.isSmall ? '15px' : '20px')};
  ${(props) => (props.isGrid || props.isSmall ? 'margin: 4px;' : 'margin: 0 5px;')};
`;
const ViewCount = styled.div`
  float: left;
  color: ${SB_WHITE};
  font-size: 12px;
  margin-top: ${(props) => (props.isGrid || props.isSmall ? '2px' : '5px')};
`;
const IconWrapper = styled.div`
  float: right;
`;
const IconHover = styled.img`
  float: left;
  max-height: ${(props) => (props.isGrid || props.isSmall ? '20px' : '25px')};
  margin: 5px;
`;

export default {
  ProductItemWrapper,
  ProductImage,
  HeaderContentWrapper,
  ItemWrapper,
  SiderWrapper,
  SiderImage,
  SiderName,
  ProductName,
  ProductPrice,
  ProductLocationWrapper,
  IconLocation,
  ProductRatingWrapper,
  ProductRating,
  IconRating,
  ProductCount,
  HoverDataWrapper,
  ButtonWrapper,
  BoxWrapper,
  IconCountImage,
  ViewCount,
  IconWrapper,
  IconHover,
};
