import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  SB_GREY,
  SB_MEDIUM_GREY,
  SB_PURPLE,
  SB_GREEN,
  SB_YELLOW,
} from '../../../modules/styleConstants';

const ProductItemWrapper = styled(Link)`
  width: 100%;
  padding: 8px;
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
const ProductImage = styled.img`
  background-size: 100% 100%;
  height: ${(props) => {
    if (props.isSmall) {
      return '178px';
    }
    if (props.isGrid) {
      return '215px';
    }
    return '270px';
  }};
})};
  @media (max-width: 380px) {
    height: 145px;
  }
`;
const HeaderContentWrapper = styled.div`
  position: relative;
`;
const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0px solid ${SB_GREY};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px 0 0 0;
  border-top: 0;
  @media (max-width: 680px) {
    padding: 5px 0;
  }
`;
const SiderWrapper = styled(Link)`
  margin: 2px 0;
  text-decoration: none;
`;
const SiderImage = styled.img`
  width: ${(props) => (props.isSmall ? '25px' : '30px')};
  float: left;
  border-radius: 50px;
`;
const SiderName = styled.div`
  font-size: ${(props) => (props.isSmall ? '10px' : '12px')};
  margin: ${(props) => (props.isSmall ? '3px 0 0 30px' : '0 30px')};
  padding: ${(props) => (props.isSmall ? '0' : '5px')};
  color: ${SB_GREY};
`;
const ProductName = styled.div`
  margin-top: 5px;
  color: ${SB_MEDIUM_GREY};
`;
const ProductPrice = styled.div`
  color: ${SB_GREEN};
`;
const ProductLocationWrapper = styled.div`
  color: ${SB_GREY};
`;
const IconLocation = styled.i`
  color: ${SB_GREY};
  margin-right: 5px;
`;
const ProductRatingWrapper = styled.div`
  color: ${SB_YELLOW};
`;
const ProductRating = styled.p`
  float: left;
`;
const IconRating = styled.i`
  color: ${SB_YELLOW};
  margin-right: 5px;
  font-size: 16px;
`;
const ProductCount = styled.p`
  margin-left: 5px;
  color: ${SB_GREY};
  float: left;
  font-size: 11px;
  margin-top: 1px;
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
};
