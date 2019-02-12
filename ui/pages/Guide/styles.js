import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SB_GREEN, SB_WHITE, SB_DARK_GREEN } from '../../../modules/styleConstants';

const Guide = styled.div``;
const ContentWrapper = styled.div`
  background: ${SB_WHITE};
  padding: 5px 20px 10px 20px;
  @media (max-width: 768px) {
    padding: 5px 8px 10px 8px;
  }
  border: 1px solid #e0e0e0;
  margin: 10px auto;
  max-width: 1080px;
  border-radius: 5px;
  position: relative;
`;
const CustomButton = styled(Link)`
  background: ${SB_GREEN};
  color: ${SB_WHITE};
  border: 1px solid ${SB_GREEN};
  font-size: 10px;
  letter-spacing: 3px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  display: inline-block;
  width: 45%;
  margin: 20px auto;
  text-align: center;
  display: block;
  &:hover,
  &:focus {
    color: ${SB_WHITE};
    text-decoration: none;
    background-color: ${SB_DARK_GREEN};
  }
`;
const ImageGuide = styled.img`
  max-width: 250px;
  margin: 20px auto;
`;
const ImageLogo = styled.img`
  background-size: cover;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60%;

  @media (max-width: 992px) {
    margin-top: 0;
  }
  @media (max-width: 576px) {
    margin-top: 0;
  }
  @media (max-width: 480px) {
    margin-top: 0;
  }
  @media (max-width: 360px) {
    max-width: 35%;
    margin-top: 0;
  }
`;
const ImageProductType = styled.img`
  background-size: cover;
  max-width: 65%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  @media (max-width: 360px) {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;
const WrapperImage = styled.div`
  margin: 30px 0;
`;
const Text = styled.h2`
  font-weight: 200;
  font-size: 14px;
  text-align: justify;
  margin: 20px;
`;

export default {
  Guide,
  ContentWrapper,
  CustomButton,
  ImageGuide,
  ImageLogo,
  ImageProductType,
  WrapperImage,
  Text,
};
