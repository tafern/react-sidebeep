import styled from 'styled-components';

const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;
const PartnerWrapper = styled.div`
  @media (min-width: 786px) {
    float: left;
  }
  @media (max-width: 680px) {
    text-align: center;
    margin: 5px;
  }
`;

export default {
  Container,
  PartnerWrapper,
};
