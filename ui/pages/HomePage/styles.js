import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  SB_MEDIUM_GREY,
  SB_DARK_GREY,
  SB_GREEN,
  SB_DARK_GREEN,
  SB_LIGHT_GREY,
} from '../../../modules/styleConstants';

const HomePage = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;
const HeaderCampaign = styled(Col)`
  padding-right: 5px !important;
  padding-left: 5px !important;
`;
const CampaignPromo = styled.div`
  width: 100%;
  padding-bottom: 10px;
  display: block;
  @media (max-width: 380px) {
    padding-bottom: 0;
    margin: 10px 0;
    display: none;
  }
`;
const CampaignPromoImage = styled.img`
  width: 100%;
  height: 123px;
  border-radius: 5px;
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
  border-radius: 5px;
  position: relative;
  margin-left: 10px;

  @media screen and (max-width: 360px) {
    margin: 10px 0;
  }
`;
const CategoryLink = styled(Link)`
  width: 122px;
  float: left;
  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: none;
  }
  @media (max-width: 380px) {
    width: 80px;
    height: 100px;
  }
`;
const CategoryWrapper = styled.div`
  margin: 20px 0;
  color: ${SB_GREEN};
  text-align: center;
`;
const CategoryLine = styled.div`
  background-color: ${SB_LIGHT_GREY};
  float: left;
  height: 35px;
  margin: 25px 10px 0 10px;
  padding: 0.5px;
  display: block;
  @media (max-width: 380px) {
    display: none;
  }
`;
const IconCategory = styled.img`
  width: 35px;
  margin-top: 3px;
  height: 30px;
`;
const IconTitle = styled.div`
  padding-top: 5px;
  font-size: 13px;
`;
const Products = styled.div`
  margin: 10px auto;
  border-radius: 5px;
  position: relative;

  @media screen and (min-width: 768px) {
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
  color: ${SB_DARK_GREY};
`;
const ProductDescription = styled.div`
  color: ${SB_MEDIUM_GREY};
  font-size: 12px;
  margin-left: 9px;
`;
const WrapperViewAll = styled(Link)`
  padding-right: 10px;
  margin-top: 12px;
  color: ${SB_GREEN};
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${SB_DARK_GREEN};
  }

  @media (max-width: 768px) {
    position: relative;
    bottom: 0;
  }
`;
const News = styled.div`
  border-radius: 5px;
  position: relative;
`;
const NewsTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 8px;
  font-weight: 400;
  font-size: 20px;
  color: ${SB_DARK_GREY};
`;
const VideoTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 20px;
  color: ${SB_DARK_GREY};
`;
const Videos = styled.div`
  padding: 5px;
  margin: 10px auto;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    padding: 5px 8px 10px 8px;
    margin: 10px 0;
  }
`;
const MediaTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 8px;
  font-weight: 400;
  font-size: 20px;
  color: ${SB_DARK_GREY};
`;
const MediaCoverage = styled.div`
  padding: 5px;
  margin: 10px auto;
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
const VideoWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 10px auto;
  .fullSize {
    width: 100%;
    height: 676px;
    @media (max-width: 1200px) {
      height: 530px;
    }
    @media (max-width: 992px) {
      height: 400px;
    }
    @media (max-width: 480px) {
      height: 250px;
    }
  }
`;

export default {
  HomePage,
  HeaderCampaign,
  CampaignPromo,
  CampaignPromoImage,
  LinkCampaign,
  Category,
  CategoryWrapper,
  CategoryLink,
  CategoryLine,
  IconCategory,
  IconTitle,
  Wrapper,
  Products,
  ProductTitle,
  ProductDescription,
  WrapperViewAll,
  News,
  NewsTitle,
  VideoTitle,
  Videos,
  MediaTitle,
  MediaCoverage,
  H3,
  VideoWrapper,
};
