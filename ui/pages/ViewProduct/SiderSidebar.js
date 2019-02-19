import React from 'react';
import ReadMoreReact from 'read-more-react';
import PropTypes from 'prop-types';
import {
  SiderContainer,
  SiderWrapper,
  SiderImage,
  SiderName,
  SiderRatingWrapper,
  SiderRating,
  IconRating,
  SiderCount,
  SiderLine,
  IconImage,
  SiderWrapInfo,
  SiderIdentityImage,
  SiderIdentityDesc,
  SiderDescription,
} from './styles';
// import fetchSiderInfo from 'common/siderDetail/actions';

class SiderSidebar extends React.Component {
  componentDidMount() {
    // const { siderId } = this.props;
    // this.props.fetchSiderInfo(siderId);
  }
  render() {
    const { onSiderDetailClicked } = this.props;
    const description =
      'Mau Kemana Si adalah Tour Organizer yang sudah pengalaman semenjak tahun 2015 dan\n' +
      'sangat mengutamakan kenyamanan, keamanan dan kepuasaan customers. Tour Organizer kami\n' +
      'sudah dipercaya untuk event Family Gathering dan Private Trip oleh banyak Perusahaan Besar\n' +
      'seperti Astra Honda Motor, Ace Hardware, Honda Mobil, Gikoko, RPT dan lainnya. Serta kami\n' +
      'sudah dipercaya untuk Study tour beberapa kampus dan sekolah yaitu Universitas Uhamka, GS\n' +
      'Fame Bussiness School, SMP 269 Jakarta, SMP 78 Jakarta dan lainnya We Provide : 🏖 Open\n' +
      'trip 🕴 Private trip 👩‍🎓 Study tour 👔 Family gathering 🚎 Rent Bus';
    return (
      <SiderContainer>
        <SiderWrapper onClick={onSiderDetailClicked}>
          <SiderImage src="/img/logo-sider/shoesandcare.jpg" alt="siderImage" />
        </SiderWrapper>
        <SiderName>SHOES AND CARE (SENAYAN)</SiderName>
        <SiderRatingWrapper>
          <SiderRating>
            <IconRating className="icon ion-md-star" /> 5
          </SiderRating>
          <SiderCount>(22 review) | 48 orders | 70 views</SiderCount>
        </SiderRatingWrapper>
        <SiderLine />
        <SiderWrapInfo>
          <IconImage className="icon ion-md-archive" />
          25 Services
        </SiderWrapInfo>
        <SiderWrapInfo>
          <IconImage className="icon ion-md-locate" />
          Jakarta
        </SiderWrapInfo>
        <SiderWrapInfo className="clearfix">
          <SiderIdentityImage src="/img/icons/sb-verified.png" alt="identity" />
          <SiderIdentityDesc>appropriate identity</SiderIdentityDesc>
        </SiderWrapInfo>
        <SiderDescription>
          <ReadMoreReact
            className="read-more-button"
            text={description}
            min={80}
            ideal={100}
            max={200}
          />
        </SiderDescription>
      </SiderContainer>
    );
  }
}

SiderSidebar.propTypes = {
  onSiderDetailClicked: PropTypes.func.isRequired,
};

export default SiderSidebar;