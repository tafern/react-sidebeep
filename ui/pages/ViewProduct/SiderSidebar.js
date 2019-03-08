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
  IconSiderRating,
  SiderCount,
  SiderLine,
  InfoTitleSidebar,
  InfoSidebar,
  SiderWrapInfo,
  SiderDescription,
  ButtonChatSider,
  ChatImage,
  ChatImageHover,
} from './styles';

class SiderSidebar extends React.Component {
  componentDidMount() {
    // const { siderId } = this.props;
    // this.props.fetchSiderInfo(siderId);
  }
  render() {
    const { org } = this.props;
    const description =
      'Mau Kemana Si adalah Tour Organizer yang sudah pengalaman semenjak tahun 2015 dan\n' +
      'sangat mengutamakan kenyamanan, keamanan dan kepuasaan customers. Tour Organizer kami\n' +
      'sudah dipercaya untuk event Family Gathering dan Private Trip oleh banyak Perusahaan Besar\n' +
      'seperti Astra Honda Motor, Ace Hardware, Honda Mobil, Gikoko, RPT dan lainnya. Serta kami\n' +
      'sudah dipercaya untuk Study tour beberapa kampus dan sekolah yaitu Universitas Uhamka, GS\n' +
      'Fame Bussiness School, SMP 269 Jakarta, SMP 78 Jakarta dan lainnya We Provide : 🏖 Open\n' +
      'trip 🕴 Private trip 👩‍🎓 Study tour 👔 Family gathering 🚎 Rent Bus';
    const id = 'fEjfJn9wArz8aeb4m';
    return (
      <SiderContainer>
        <SiderWrapper to={`/org/${org._id}`}>
          <div>
            <SiderImage src={org.url} alt="siderImage" />
          </div>
          <SiderName>{org.fullname}</SiderName>
        </SiderWrapper>
        <SiderRatingWrapper>
          <SiderRating>
            <IconSiderRating src="/img/icons/medal.svg" /> 5
          </SiderRating>
          <SiderCount>(22 review) | 48 orders | 70 views</SiderCount>
        </SiderRatingWrapper>
        <SiderLine />
        <SiderWrapInfo className="clearfix">
          <InfoTitleSidebar>Total Services</InfoTitleSidebar>
          <InfoSidebar>25 Services</InfoSidebar>
        </SiderWrapInfo>
        <SiderWrapInfo className="clearfix">
          <InfoTitleSidebar>Location Sider</InfoTitleSidebar>
          <InfoSidebar>Jakarta</InfoSidebar>
        </SiderWrapInfo>
        <SiderWrapInfo className="clearfix">
          <InfoTitleSidebar>Avg. Response Time</InfoTitleSidebar>
          <InfoSidebar>2 hours</InfoSidebar>
        </SiderWrapInfo>
        <SiderLine />
        <SiderDescription to={`/org/${id}`}>
          <ReadMoreReact
            text={description}
            min={80}
            ideal={100}
            max={200}
            readMoreText="View Profile"
          />
        </SiderDescription>
        <ButtonChatSider className="clearfix">
          <ChatImage src="/img/icons/chat-green.svg" alt="chatImage" />
          <ChatImageHover
            className="chatImageHover"
            src="/img/icons/chat-white.svg"
            alt="chatImageHover"
          />
          Chat Sider
        </ButtonChatSider>
      </SiderContainer>
    );
  }
}

SiderSidebar.propTypes = {
  org: PropTypes.object.isRequired,
};

export default SiderSidebar;
