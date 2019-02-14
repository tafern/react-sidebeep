import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { SB_DARK_GREY, SB_PURPLE } from '../../../modules/styleConstants';

const OrgItemWrapper = styled(Link)`
  width: 100%;
  padding: 8px;
  display: inline-block;
  height: auto;
  margin-bottom: 0px;
  text-decoration: none;
  color: ${SB_PURPLE};

  &:hover {
    cursor: pointer;
    background: ${SB_DARK_GREY};
    text-decoration: none;
    color: ${SB_PURPLE};
  }
`;
const OrgImage = styled.img`
  background-size: 100% 100%;
  height: 200px;
  @media (max-width: 380px) {
    height: 145px;
  }
`;
const HeaderContentWrapper = styled.div`
  position: relative;
`;
const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0px solid ${SB_DARK_GREY};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px 0 0 0;
  border-top: 0;
  @media (max-width: 680px) {
    padding: 5px 0;
  }
`;
const OrgName = styled.div`
  margin-top: 5px;
`;
const OrgPrice = styled.div``;
const OrgRating = styled.div``;
export default {
  OrgItemWrapper,
  OrgImage,
  HeaderContentWrapper,
  ItemWrapper,
  OrgName,
  OrgPrice,
  OrgRating,
};
