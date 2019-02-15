import styled from 'styled-components';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { SB_GREEN, SB_MEDIUM_GREY } from '../../../modules/styleConstants';

export const StyledViewProduct = styled.div``;
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
export const ProductRating = styled.div``;
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
export const OrderButton = styled(Button)`
  padding: 10px 65px;
  margin: 182px 20px 0 0px;
`;
export const Products = styled.div`
  padding: 5px 15px 10px 15px !important;
  margin: 10px auto !important;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 5px 8px 10px 8px;
    margin: 10px 0;
  }
`;
export const ProductName = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 20px;
`;
