import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  SB_WHITE,
  SB_PURPLE,
  SB_GREEN,
  SB_DARK_GREEN,
  SB_GREY,
  SB_DARK_GREY,
  SB_LIGHT_GREY,
  SB_BLACK,
  SB_YELLOW,
} from '../../../modules/styleConstants';

export const CartList = styled.div`
  padding: 10px 20px;
`;
export const StyledCart = styled.div`
  header {
    margin: 0px 0 20px;
  }

  @media screen and (min-width: 768px) {
    header {
      margin: 0 0 20px;
    }
  }
`;

// Cart & Product
export const CartWrapper = styled.div`
  position: relative;
  box-shadow: 0px 5px 10px -4px black !important;
  border: 1px solid ${SB_WHITE};
  padding: 10px;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02, 1.02);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
export const CartBoxWrapper = styled.div`
  padding: 0 5px;
  float: left;
`;
export const ImageProduct = styled.img`
  border: 1px solid var(--gray-lighter);
  border-radius: 3px;
  float: left;
  width: 80px;
  max-height: 200px;
`;
export const ProductTitle = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: ${SB_BLACK};
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
export const ProductPrice = styled.div`
  color: ${SB_GREEN};
  font-weight: bold;
  font-size: 14px;
`;
export const ProductLocationTitle = styled.div`
  color: ${SB_DARK_GREY};
  font-weight: bold;
  font-size: 12px;
`;
export const ProductLocationVisit = styled.div`
  color: ${SB_GREEN};
  font-size: 12px;
  font-weight: bold;
`;
export const ProductLocationDescription = styled.div`
  color: ${SB_GREY};
  font-size: 12px;
`;
export const CartActionWrapper = styled.div`
  float: right;
`;
export const IconRemove = styled.div`
  font-size: 20px;
  color: ${SB_LIGHT_GREY};
  text-align: right;
  margin-bottom: 30px;
  display: block;
  padding-right: 5px;
`;
export const InputGroup = styled.div`
  padding-top: 0;
  min-width: 120px;
  float: right;
`;
export const CustomButton = styled.button`
  background: ${SB_WHITE};
  color: ${SB_GREEN};
  border: 1px solid ${SB_GREEN};
  font-weight: 700;
  border-radius: 5px;
  min-width: 35px;
  height: 35px;
  width: 30px;
  &:hover,
  &:focus {
    color: ${SB_PURPLE};
  }
`;
export const InputQty = styled.input`
  max-width: 35px;
  height: 35px;
  border-radius: 5px;
  text-align: center;
  color: ${SB_GREEN};
  margin-right: 5px;
  margin-left: 5px;
  border: 0 solid;
  padding: 0 !important;
  background-color: ${SB_DARK_GREEN};
`;

// Sidebar
export const CartContainer = styled.div`
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
export const Summary = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${SB_GREY};
  margin-top: 10px;
`;
export const CartLine = styled.div`
  border: 1px solid ${SB_LIGHT_GREY};
  width: 185px;
  margin: 10px;
`;
export const CartPriceWrapper = styled.div`
  margin: 15px 0;
  text-align: center;
  text-decoration: none;
`;
export const CartPriceTitle = styled.div`
  float: left;
  font-size: 14px;
  margin-right: 5px;
`;
export const CartTotalPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${SB_GREEN};
  float: right;
`;
export const ButtonCheckout = styled(Button)`
  width: 100%;
  background-color: ${SB_GREEN};
  color: ${SB_WHITE};
  padding: 10px
  margin: 5px 0;
  border: 1px solid ${SB_GREEN};
  &:hover {
    background-color: ${SB_DARK_GREEN};
    border: 1px solid ${SB_DARK_GREEN};
    color: ${SB_WHITE};
  }
`;

// Sider
export const SiderWrapper = styled.div`
  margin: 5px 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
export const SiderImage = styled.img`
  width: 30px;
  border-radius: 50px;
`;
export const SiderName = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: ${SB_GREY};
  margin-top: 5px;
`;
export const RatingWrapper = styled.div`
  color: ${SB_YELLOW};
  text-align: center;
  margin-left: 55px;
`;
export const SiderRating = styled.p`
  float: left;
`;
export const IconRating = styled.i`
  color: ${SB_YELLOW};
  font-size: 16px;
`;
export const ProductCount = styled.p`
  margin-left: 5px;
  color: ${SB_GREY};
  float: left;
  font-size: 12px;
`;
