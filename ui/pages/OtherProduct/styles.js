import styled from 'styled-components';
import { SB_DARK_GREY } from '../../../modules/styleConstants';

export const Product = styled.div`
  margin: 10px auto;
  position: relative;

  @media screen and (min-width: 768px) {
    margin: 10px 0;
  }
`;
export const ProductName = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 20px;
  color: ${SB_DARK_GREY};
`;
