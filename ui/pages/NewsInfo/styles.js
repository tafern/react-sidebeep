import styled from 'styled-components';

const ArrowIconNext = styled.img`
  width: 50px;
  height: 50px;
  right: -17px !important;
  z-index: 99999;
`;
const ArrowIconPrev = styled.img`
  width: 50px;
  height: 50px;
  left: -17px !important;
  z-index: 99999;
`;
const NewsInfoWrapper = styled.div``;
const ImageNewsInfo = styled.img`
  background-size: cover;
  width: 100%;
  height: 186px;
  padding: 3px;
  border-radius: 20px;
  @media (max-width: 680px) {
    height: 100px;
  }
`;
export default {
  ArrowIconNext,
  ArrowIconPrev,
  NewsInfoWrapper,
  ImageNewsInfo,
};
