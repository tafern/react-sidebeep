import styled from 'styled-components';
import { SB_MEDIUM_GREY } from '../../../modules/styleConstants';

export const Wrapper = styled.div`
  margin-right: 2px;
  display: inline-block;
`;
export const StarWrapper = styled.div`
  display: inline-block;
  width: 80px;
  float: left;
  @media (max-width: 680px) {
    margin-top: 0;
    margin-left: 0px;
  }
`;
export const TextReview = styled.div`
  font-size: 12px;
  padding-top: 2px;
  color: ${SB_MEDIUM_GREY};
`;
