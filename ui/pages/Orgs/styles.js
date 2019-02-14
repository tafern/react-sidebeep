import styled from 'styled-components';

const GridWrapper = styled.div``;
const Block = styled.div`
  float: left;
  width: 19.3333%;
  @media (max-width: 1198px) {
    width: 24.333%;
  }
  @media (max-width: 990px) {
    width: 33.333%;
  }
  @media (max-width: 744px) {
    width: 33%;
  }
  @media (max-width: 638px) {
    width: 50%;
  }
  @media (max-width: 478px) {
    width: 50%;
  }
`;
export default {
  GridWrapper,
  Block,
};
