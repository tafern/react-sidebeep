import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding-left: 10px;
  padding-right: 10px;
`;
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
export default {
  Wrapper,
  ArrowIconNext,
  ArrowIconPrev,
};
