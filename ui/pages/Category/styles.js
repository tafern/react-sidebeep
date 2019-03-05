import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SB_MEDIUM_GREY, SB_GREEN } from '../../../modules/styleConstants';

const HomePage = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;
const LinkCampaign = styled(Link)`
  margin: 0 10px;
  padding: 6px 12px;
  max-width: 500px;
  background-color: #ffffff;
  color: #333;
  display: inline-block;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
  @media (min-width: 1080px) {
    display: inline-block;
  }
`;
const Category = styled.div`
  background: #fff;
  padding: 5px 20px 10px 20px !important;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  position: relative;

  @media screen and (max-width: 360px) {
    margin: 10px 0;
  }
`;
const CategoryWrapper = styled(Link)`
  margin: 25px 0;
  text-align: center;
`;
const IconCategory = styled.i`
  color: ${SB_GREEN};
  font-size: 50px;
`;
const Product = styled.div`
  background: #fff;
  padding: 5px 20px 10px 20px !important;
  border: 1px solid #e0e0e0;
  margin: 10px auto !important;
  border-radius: 5px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 5px 8px 10px 8px;
    margin: 10px 0;
  }
`;
const Wrapper = styled.div`
  margin-top: 10px;
`;
const ProductTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 8px;
  font-weight: 400;
  font-size: 20px;
`;
const ProductDescription = styled.div`
  color: ${SB_MEDIUM_GREY};
  font-size: 12px;
  margin-left: 9px;
`;
const WrapperViewAll = styled.div`
  padding-right: 10px;
  margin-top: 12px;

  &:hover .underLinkView {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    position: relative;
    bottom: 0;
  }
`;
const News = styled.div`
  background: #fff;
  padding: 5px 20px 10px 20px !important;
  border: 1px solid #e0e0e0;
  margin: 10px auto !important;
  border-radius: 5px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 5px 8px 10px 8px;
    margin: 10px 0;
  }
`;
const MediaPartner = styled.div`
  background: #fff;
  padding: 5px 20px 10px 20px !important;
  border: 1px solid #e0e0e0;
  margin: 10px auto !important;
  border-radius: 5px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 5px 8px 10px 8px;
    margin: 10px 0;
  }
`;
const H3 = styled.h3`
  margin-bottom: 24px;
  padding-left: 8px;
  font-weight: 400;
  font-size: 20px;
`;

export default {
  HomePage,
  LinkCampaign,
  Category,
  CategoryWrapper,
  IconCategory,
  Wrapper,
  Product,
  ProductTitle,
  ProductDescription,
  WrapperViewAll,
  News,
  MediaPartner,
  H3,
};
