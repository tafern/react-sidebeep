import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { SB_DARK_GREY } from '../../../modules/styleConstants';

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding-left: 15px;
  padding-right: 15px;
`;
const ProductDetailWrapper = styled(Link)`
  position: relative;
  border: 1px solid var(--gray-lighter);
  border-top: 5px solid var(--gray-lighter);
  padding: 20px;
  border-radius: 3px;
  min-height: 180px;
  transition: transform 0.3s ease-in-out;

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  header {
    margin: 0;
  }

  h2 {
    margin: 10px 0 0;
    font-size: 16px;
    line-height: 24px;
  }

  p {
    margin: 10px 0 0;
    color: var(--gray-light);
  }

  &:hover {
    transform: scale(1.02, 1.02);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
const ArrowIconNext = styled.img`
  right: -17px !important;
`;
const ArrowIconPrev = styled.img`
  left: -17px !important;
`;
const HeaderContentWrapper = styled.div`
  position: relative;
`;
const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -8px;
  border: 0px solid ${SB_DARK_GREY};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 7px;
  border-top: 0;
  @media (max-width: 680px) {
    padding: 5px 0;
  }
`;
export default {
  Wrapper,
  ProductDetailWrapper,
  ArrowIconNext,
  ArrowIconPrev,
  HeaderContentWrapper,
  DetailWrapper,
};
