import styled from 'styled-components';

const ArrowIconNext = styled.img`
  width: 40px;
  height: 40px;
  right: 5px !important;
  z-index: 999;
`;
const ArrowIconPrev = styled.img`
  width: 40px;
  height: 40px;
  left: 5px !important;
  z-index: 999;
`;
const NewsInfoWrapper = styled.div``;
const ImageNewsInfo = styled.img`
  background-size: cover;
  width: 100%;
  height: 186px;
  padding: 3px;
  border-radius: 10px;
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
