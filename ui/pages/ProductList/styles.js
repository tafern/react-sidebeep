import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
`;
const ArrowIconNext = styled.img`
  width: 40px;
  height: 40px;
  right: -17px !important;
  z-index: 999;
`;
const ArrowIconPrev = styled.img`
  width: 40px;
  height: 40px;
  left: -17px !important;
  z-index: 999;
`;
export default {
  Wrapper,
  ArrowIconNext,
  ArrowIconPrev,
};
