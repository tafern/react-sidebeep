import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  SB_DARK_GREY,
  SB_GREEN,
  SB_MEDIUM_GREY,
  SB_DARK_GREEN,
  SB_GREY,
} from '../../../modules/styleConstants';

export const FooterTitle = styled.div`
  font-family: 'isocteur';
  font-size: 30px;
  color: ${SB_GREEN};
  @media (max-width: 380px) {
    font-size: 20px;
  }
`;
export const FooterTitleMark = styled.span`
  position: absolute;
  font-size: 18px;
`;
export const FooterDownloadWrapper = styled.div`
  margin: 40px 0 15px 0;
  @media (max-width: 380px) {
    margin: 10px 40px 10px 0px;
  }
`;
export const FooterImageDownload = styled.img`
  width: 100px;
  float: left;
`;
export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid var(--gray-lighter);
  padding: 20px 0;
  border-top: 1px solid ${SB_DARK_GREY};

  p {
    color: ${SB_DARK_GREY};
    font-size: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 8px;

    .footerTitle {
      font-weight: bold;
      font-size: 16px;
    }

    &:first-child {
      margin-right: 15px;
    }

    a {
      color: ${SB_DARK_GREY};
    }

    a:hover,
    a:active,
    a:focus {
      text-decoration: none;
      color: ${SB_DARK_GREY};
    }
  }

  @media screen and (min-width: 768px) {
    ul li:first-child {
      margin-right: 100px;
    }
  }
`;
export const FooterItem = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  font-weight: bold;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
export const FooterDivider = styled.hr`
  margin-top: 0;
  margin-bottom: 15px;
  background-color: ${SB_MEDIUM_GREY};
  height: 2px;
  border: none;
`;
export const FooterButtonIndonesia = styled(Button)`
  border: 0;
  color: ${SB_GREY};
  &:hover,
  &:focus {
    color: ${SB_GREEN};
  }
`;
export const FooterDividerLanguange = styled.div`
  background-color: ${SB_GREY};
  padding: 0.5px;
  height: 25px;
  margin: 5px;
`;
export const FooterButtonEnglish = styled(Button)`
  border: 0;
  color: ${SB_GREEN};
  &:hover,
  &:focus {
    color: ${SB_DARK_GREEN};
  }
`;
export const FooterBottom = styled.div`
  margin-left: 160px;
  @media (max-width: 380px) {
    margin-left: 0 !important;
  }
`;
export const FooterItemBox = styled.ul`
  padding-left: 115px !important;
  @media (max-width: 380px) {
    padding-left: 0 !important;
  }
`;
export const FooterItemWrapper = styled.li`
  float: left;
  margin-bottom: 8px;
  font-size: 12px;
  margin-right: 0px !important;
  padding: 0 25px;
  @media (max-width: 380px) {
    padding: 0px 5px;
  }
`;
export const FooterItemButton = styled.li`
  margin-right: 0 !important;
`;
export const FooterItemBottom = styled(Link)`
  font-size: 12px;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
export const FooterImageSosmed = styled.img`
  width: 20px;
`;
