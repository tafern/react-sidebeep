import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;
const Container = styled.div`
  margin-top: 20px;
  padding-bottom: 50px;
`;
const PartnerContainer = styled.div`
  width: 16.555%;
  float: left;
  @media (max-width: 380px) {
    width: 32%;
  }
`;
const PartnerImage = styled.img`
  margin-right: 7px;
  width: 165px;
  height: auto;
  @media (max-width: 380px) {
    width: 100px;
  }
`;
const PartnerWrapper = styled.div`
  @media (min-width: 786px) {
    float: left;
  }
  @media (max-width: 680px) {
    text-align: center;
    margin: 5px 0;
  }
`;

export default {
  Wrapper,
  Container,
  PartnerContainer,
  PartnerImage,
  PartnerWrapper,
};
