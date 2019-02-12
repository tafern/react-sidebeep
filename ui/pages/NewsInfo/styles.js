import styled from 'styled-components';

const ArrowIconNext = styled.img`
  right: -17px !important;
`;
const ArrowIconPrev = styled.img`
  left: -17px !important;
`;
const NewsInfoWrapper = styled.div``;
const ImageNewsInfo = styled.img`
  background-size: cover;
  width: 100%;
  height: 260px;
  padding: 5px;
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
