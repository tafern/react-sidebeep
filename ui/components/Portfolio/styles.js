import styled from 'styled-components';
import { SB_GREEN } from '../../../modules/styleConstants';

export const PortfolioWrapper = styled.div`
  width: 100%;
  margin: 10px auto;
  .slick-next,
  .slick-prev {
    display: none !important;
  }
  .slick-dots {
    @media (max-width: 550px) {
      bottom: 0px !important;
    }
    bottom: 0px !important;
    position: absolute;
    li {
      width: auto !important;
      button {
        padding: 0;
        @media (max-width: 550px) {
          width: 40px !important;
        }
        width: 20px !important;
        border-radius: 0;
        background-color: #fff;
        height: 5px;

        &:before {
          display: none;
        }
      }
      &.slick-active {
        button {
          background-color: ${SB_GREEN};
        }
      }
    }
  }
`;
export const PortfolioImage = styled.img`
  background-size: cover;
  margin: 0 auto;
  width: 92%;
  border-radius: 3px;
`;
