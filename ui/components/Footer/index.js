import React from 'react';
import { Grid } from 'react-bootstrap';
import { year } from '../../../modules/dates';
import {
  FooterWrapper,
  FooterTitle,
  FooterTitleMark,
  FooterDivider,
  FooterItem,
  FooterButtonIndonesia,
  FooterButtonEnglish,
  FooterDividerLanguange,
  FooterItemWrapper,
  FooterBottom,
  FooterItemBox,
  FooterItemBottom,
  FooterImageDownload,
  FooterDownloadWrapper,
  FooterImageSosmed,
  FooterItemButton,
} from './styles';

const copyrightYear = () => {
  const currentYear = year();
  return currentYear;
};
const Footer = () => (
  <FooterWrapper>
    <Grid>
      <FooterTitle className="pull-left">
        SIDEBEEP
        <FooterTitleMark>®</FooterTitleMark>
        <FooterDownloadWrapper className="clearfix">
          <FooterImageDownload src="/img/google-play.png" alt="download" />
          <FooterImageDownload src="/img/app-store.png" alt="download" />
        </FooterDownloadWrapper>
      </FooterTitle>
      <ul className="pull-right">
        <FooterItemButton>
          <FooterButtonIndonesia className="pull-left">Indonesia</FooterButtonIndonesia>
          <FooterDividerLanguange className="pull-left" />
          <FooterButtonEnglish className="pull-right">English</FooterButtonEnglish>
        </FooterItemButton>
      </ul>
      <ul className="pull-right">
        {/* <li className="footerTitle">Need Help</li> */}
        <li>
          <FooterItem to="/partner">Join as a Partner</FooterItem>
        </li>
        <li>
          <FooterItem to="/partner">Our Partnership</FooterItem>
        </li>
        <li>
          <FooterItem to="/partner">Help</FooterItem>
        </li>
        {/* <li>
          <a
            href="https://tawk.to/chat/5bb6e54bb033e9743d0262fa/default"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            <div id="status" onClick={() => props.tawkToMessage()}>
              <TawkToImage src="/img/tawk_to.svg" alt="tawk.to" />
            </div>
          </a>
        </li> */}
      </ul>
      <ul className="pull-right">
        {/* <li className="footerTitle">Sitemap</li> */}
        <li>
          <FooterItem to="/panduan">About</FooterItem>
        </li>
        <li>
          <FooterItem to="/id/term-of-use">Blog</FooterItem>
        </li>
      </ul>
    </Grid>
    <FooterDivider />
    <Grid>
      <p className="pull-left">
        Copyright &copy; {copyrightYear()} PT. TAFERN INDONESIA PERKASA. All rights reserved.
      </p>
      <FooterBottom>
        <FooterItemBox className="pull-left">
          <FooterItemWrapper>
            <FooterItemBottom to="/terms">FAQ</FooterItemBottom>
          </FooterItemWrapper>
          <FooterItemWrapper>
            <FooterItemBottom to="/privacy">
              Privacy
              <span className="hidden-xs"> Policy</span>
            </FooterItemBottom>
          </FooterItemWrapper>
          <FooterItemWrapper>
            <FooterItemBottom to="/patnership">Patnership Policy</FooterItemBottom>
          </FooterItemWrapper>
        </FooterItemBox>
        <ul className="pull-right">
          <FooterItemWrapper>
            <FooterItemBottom to="/terms">
              <FooterImageSosmed src="/img/icons/sb-facebook-green.png" alt="facebook" />
            </FooterItemBottom>
          </FooterItemWrapper>
          <FooterItemWrapper>
            <FooterItemBottom to="/privacy">
              <FooterImageSosmed src="/img/icons/sb-youtube-green.png" alt="youtube" />
            </FooterItemBottom>
          </FooterItemWrapper>
          <FooterItemWrapper>
            <FooterItemBottom to="/privacy">
              <FooterImageSosmed src="/img/icons/sb-instagram-green.png" alt="instagram" />
            </FooterItemBottom>
          </FooterItemWrapper>
        </ul>
      </FooterBottom>
    </Grid>
  </FooterWrapper>
);

Footer.propTypes = {};

export default Footer;
