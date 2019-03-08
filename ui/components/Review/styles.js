import styled from 'styled-components';
import { SB_DARK_GREY, SB_GREY, SB_LIGHT_GREY } from '../../../modules/styleConstants';

export const ContentWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 5px 8px 10px 8px;
  }
  border-radius: 5px;
  position: relative;
  margin: 10px 0;
`;
export const ReviewWrapper = styled.div`
  font-size: 14px;
  color: ${(props) => (props.active ? `${SB_DARK_GREY}` : `${SB_GREY}`)};
  margin: 10px 5px 20px 5px;
  float: left;
`;
export const BeeperImage = styled.img`
  width: 50px;
  background-size: cover;
  border-radius: 50px;
`;
export const BeeperName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const ReviewDescription = styled.div``;
export const RatingWrapper = styled.div``;
export const ReviewImage = styled.img`
  width: 80px;
  background-size: cover;
  margin: 5px 0;
  cursor: pointer;
`;
export const LineReview = styled.div`
  border: 1px solid ${SB_LIGHT_GREY};
  width: 100%;
  margin: 15px 0;
`;
export const CreatedAt = styled.div`
  font-size: 12px;
  color: ${SB_GREY};
  margin-top: 2px;
  margin-left: 5px;
  float: left;
`;
export const ProductRating = styled.p`
  float: left;
`;
