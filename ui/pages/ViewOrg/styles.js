import styled from 'styled-components';
import { Col, Button, Tab, Tabs } from 'react-bootstrap';
import {
  SB_DARK_GREY,
  SB_GREEN,
  SB_GREY,
  SB_LIGHT_GREY,
  SB_MEDIUM_GREY,
  SB_WHITE,
  SB_YELLOW,
} from '../../../modules/styleConstants';

export const OrgInfo = styled.div`
  box-shadow: 2px 4px 11px -4px ${SB_MEDIUM_GREY};
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 30px;
`;
export const OrgImage = styled.img`
  float: left;
  width: 245px;
  max-height: 250px;
  margin: 10px;
`;
export const OrgTitle = styled.div`
  color: ${SB_DARK_GREY};
  font-size: 24px;
  margin: 10px 0;
`;
export const OrgDetail = styled.div`
  padding: 5px;
`;
export const OrgDescriptionTitle = styled.div`
  font-size: 16px;
  color: ${SB_DARK_GREY};
  margin: 10px 0;
  font-weight: bold;
`;
export const OrgBody = styled.div`
  font-size: 14px;
  line-height: 22px;
  tex-align: justify;

  > * {
    margin-bottom: 20px;
    white-space: pre-line;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

// Rating, View, Order
export const PanelRating = styled.div`
  float: left;
`;
export const ProductRatingWrapper = styled.div`
  color: ${SB_YELLOW};
  margin-bottom: 5px;
`;
export const IconOrgRating = styled.img`
  width: 25px;
`;
export const ProductRating = styled.p`
  float: left;
`;
export const ProductCount = styled.p`
  margin-left: 5px;
  color: ${SB_GREY};
  float: left;
  font-size: 14px;
`;

// Detail Org
export const PanelContainer = styled.div``;
export const PanelLeftWrapper = styled.div`
  margin: 5px 0;
`;
export const PanelRightWrapper = styled.div`
  margin: 5px 0;
  font-weight: bold;
`;
export const IconOrgDetail = styled.img`
  float: left;
  background-size: cover;
  width: 25px;
`;
export const TitleOrgDetail = styled.div`
  font-size: 13px;
  margin-left: 20px;
  width: 140px;
  margin-top: 2px;
`;
export const ColWrapper = styled(Col)`
  padding-right: 0 !important;
  padding-left: 0 !important;
`;
export const LineUpDetailOrg = styled.div`
  margin: 0 35px;
  height: 100px;
  background: ${SB_LIGHT_GREY};
  display: block;
  @media (max-width: 380px) {
    display: none;
  }
`;

// Sosial Media
export const PanelOurChannel = styled.div`
  float: right;
  margin-top: 30px;
`;
export const OurChannelTitle = styled.div`
  color: ${SB_MEDIUM_GREY};
  margin: 10px 5px;
`;
export const SosmedImage = styled.img`
  background-size: cover;
  width: 25px;
  float: left;
  margin: 0 5px;
`;

// Additional Content
export const CountProductListInfo = styled.div`
  margin: 20px 0;
  font-size: 14px;
`;
export const GridWrapper = styled.div``;
export const Block = styled.div`
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
export const ContentWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 5px 8px 10px 8px;
  }
  border-radius: 5px;
  position: relative;
  margin: 10px 0;
`;
export const FilterTabWrapper = styled(Tabs)`
  li {
    a {
      color: ${SB_MEDIUM_GREY};
    }
  }
  li.active {
    a {
      color: ${SB_MEDIUM_GREY};
      ${(props) => (props.activeKey ? `border-bottom: 3px solid ${SB_GREEN} !important` : '')};
    }
  }
  &:hover,
  &:focus {
    color: ${SB_MEDIUM_GREY};
  }
`;
export const FilterTab = styled(Tab)`
  color: ${SB_MEDIUM_GREY};
  &:hover {
    cursor: pointer;
  }
`;
export const OrgLine = styled.div`
  border: 1px solid ${SB_LIGHT_GREY};
  width: 275px;
  margin: 35px 0 10px 0;
`;

// Button Chat
export const ButtonChatSider = styled(Button)`
  border: 1px solid ${SB_GREEN};
  color: ${SB_GREEN};
  padding: 10px 58px;
  margin-right: 10px;
  width: 200px;
  float: right;

  &:hover {
    background-color: ${SB_GREEN};
    color: ${SB_WHITE};
    padding: 10px 30px;

    .chatImageHover {
      display: block !important;
    }
  }
`;
export const ChatImage = styled.img`
  width: 25px;
  background-size: cover;
  margin-right: 5px;
  float: left;
`;
export const ChatImageHover = styled.img`
  width: 25px;
  background-size: cover;
  float: left;
  display: none;
`;

// Feed
export const VideoContainer = styled.div`
  margin-top: 20px;
  width: 465px;
`;
export const VideoTitle = styled.h3`
  margin-bottom: 10px;
  color: ${SB_DARK_GREY}
  font-weight: bold;
`;
export const VideoDescription = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: ${SB_DARK_GREY} > * {
    margin-bottom: 20px;
    white-space: pre-line;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;
