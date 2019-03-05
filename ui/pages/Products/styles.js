import styled from 'styled-components';
import { SB_BLACK } from '../../../modules/styleConstants';

export const GridWrapper = styled.div``;
export const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
  color: ${SB_BLACK};
`;
export const SortBy = styled.div`
  margin: 10px 0;
`;
export const SortByTitle = styled.div`
  float: left;
  font-size: 16px;
  margin: 10px 0;
  color: ${SB_BLACK};
`;
export const SortByDropdown = styled.div`
  width: 30%;
  padding: 5px 10px;
  float: left;
`;
export const Block = styled.div`
  float: left;
  width: 24.999%;
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
