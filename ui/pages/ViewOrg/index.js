import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Row, Col } from 'react-bootstrap';
import parseMarkdown from '../../../modules/parseMarkdown';
import SEO from '../../components/SEO';
import BlankState from '../../components/BlankState';
import AdditionalContent from './AdditionalContent';
import { org as orgQuery } from '../../queries/Orgs.gql';
import {
  OrgInfo,
  OrgDetail,
  OrgTitle,
  OrgDescriptionTitle,
  OrgBody,
  OrgImage,
  PanelRating,
  ProductRatingWrapper,
  ProductRating,
  IconOrgRating,
  ProductCount,
  OrgLine,
  ButtonChatSider,
  ChatImage,
  ChatImageHover,
  PanelContainer,
  PanelLeftWrapper,
  PanelRightWrapper,
  IconOrgDetail,
  TitleOrgDetail,
  LineUpDetailOrg,
  ColWrapper,
  PanelOurChannel,
  OurChannelTitle,
  SosmedImage,
} from './styles';

class ViewOrg extends React.Component {
  componentWillMount() {
    this.props.data.refetch();
  }
  render() {
    const { data } = this.props;
    console.log('data', data);
    if (!data.loading && data.org) {
      const description = `${
        data.org.description
      } Berdiri di Yogyakarta sejak 12 Oktober 2013, Shoes and Care merupakan jasa perawatan premium sepatu yang pertama di Yogyakarta, dan jasa perawatan premium sepatu pertama di Indonesia yang berbasis media sosial. Untuk melayani pelanggan, saat ini Shoes and Care sudah memiliki 30 workshop di 20 kota di Indonesia.
Shoes and Care melakukan perawatan sepatu secara profesional, dengan teknik khusus, serta menggunakan alat dan bahan premium untuk perawatan sepatu, baik produk lokal maupun luar negeri. Kini, Shoes and Care tidak hanya menangani sepatu, tetapi juga tas, topi, dan dompet. Menu yang ditawarkan pun makin beragam, mulai cleaning, repaint, dan repair.
Saat ini sudah lebih dari 700.000 pasang sepatu telah ditangani. Pelanggan tidak hanya berasal dari Yogyakarta, tetapi juga dari seluruh Indonesia, bahkan ada pelanggan yang berasal dari Australia, Singapura, Malaysia, dan Amsterdam.`;
      return (
        <React.Fragment>
          <SEO
            title={data.org && data.org.name}
            description={data.org && data.org.description}
            url={`org/view/${data.org && data.org._id}`}
            contentType="article"
            created={data.org && data.org.createdAt}
            twitter="clvrbgl"
          />
          <OrgInfo>
            <Row>
              <Col sm={3}>
                {data.org.files.map((item) => {
                  if (item.refType === 'PictureProfile') {
                    return (
                      <OrgImage
                        className="mr-3"
                        src={item.images[0].imgUrl}
                        alt="Generic placeholder"
                      />
                    );
                  }
                  return null;
                })}
              </Col>
              <Col sm={9}>
                <OrgDetail>
                  <OrgTitle>{data.org && data.org.name}</OrgTitle>
                  <ProductRatingWrapper className="clearfix">
                    <PanelRating>
                      <ProductRating>
                        <IconOrgRating src="/img/icons/medal.svg" /> 5
                      </ProductRating>
                      <ProductCount>(21 review) | 20 orders | 102 views</ProductCount>
                      <OrgLine />
                    </PanelRating>
                    <ButtonChatSider className="clearfix">
                      <ChatImage src="/img/icons/chat-green.svg" alt="chatImage" />
                      <ChatImageHover
                        className="chatImageHover"
                        src="/img/icons/chat-white.svg"
                        alt="chatImageHover"
                      />
                      Chat Sider
                    </ButtonChatSider>
                  </ProductRatingWrapper>
                  <Row>
                    <Col sm={4}>
                      <PanelContainer className="clearfix">
                        <PanelLeftWrapper className="pull-left">
                          <IconOrgDetail src="/img/icons/service.svg" alt="iconOrgDetail" />
                          <TitleOrgDetail>Total Services</TitleOrgDetail>
                        </PanelLeftWrapper>
                        <PanelRightWrapper className="pull-right">15 services</PanelRightWrapper>
                      </PanelContainer>
                      <PanelContainer className="clearfix">
                        <PanelLeftWrapper className="pull-left">
                          <IconOrgDetail src="/img/icons/respone-time.svg" alt="iconOrgDetail" />
                          <TitleOrgDetail>Avg. Response Time</TitleOrgDetail>
                        </PanelLeftWrapper>
                        <PanelRightWrapper className="pull-right">2 hours</PanelRightWrapper>
                      </PanelContainer>
                      <PanelContainer className="clearfix">
                        <PanelLeftWrapper className="pull-left">
                          <IconOrgDetail src="/img/icons/recent-order.svg" alt="iconOrgDetail" />
                          <TitleOrgDetail>Recent Order</TitleOrgDetail>
                        </PanelLeftWrapper>
                        <PanelRightWrapper className="pull-right">Yesterday</PanelRightWrapper>
                      </PanelContainer>
                    </Col>
                    <ColWrapper sm={1}>
                      <LineUpDetailOrg />
                    </ColWrapper>
                    <Col sm={4}>
                      <PanelContainer className="clearfix">
                        <PanelLeftWrapper className="pull-left">
                          <IconOrgDetail src="/img/icons/location-green.svg" alt="iconOrgDetail" />
                          <TitleOrgDetail>Location Sider</TitleOrgDetail>
                        </PanelLeftWrapper>
                        <PanelRightWrapper className="pull-right">Jakarta</PanelRightWrapper>
                      </PanelContainer>
                      <PanelContainer className="clearfix">
                        <PanelLeftWrapper className="pull-left">
                          <IconOrgDetail src="/img/icons/from.svg" alt="iconOrgDetail" />
                          <TitleOrgDetail>From</TitleOrgDetail>
                        </PanelLeftWrapper>
                        <PanelRightWrapper className="pull-right">Indonesia</PanelRightWrapper>
                      </PanelContainer>
                      <PanelContainer className="clearfix">
                        <PanelLeftWrapper className="pull-left">
                          <IconOrgDetail src="/img/icons/member-since.svg" alt="iconOrgDetail" />
                          <TitleOrgDetail>Member Since</TitleOrgDetail>
                        </PanelLeftWrapper>
                        <PanelRightWrapper className="pull-right">20 Nov 2018</PanelRightWrapper>
                      </PanelContainer>
                    </Col>
                    <Col sm={3}>
                      <PanelOurChannel>
                        <OurChannelTitle>Our Channel</OurChannelTitle>
                        <SosmedImage src="/img/icons/website.svg" alt="website" />
                        <SosmedImage src="/img/icons/instagram.svg" alt="website" />
                        <SosmedImage src="/img/icons/fb.svg" alt="website" />
                        <SosmedImage src="/img/icons/youtube.svg" alt="website" />
                      </PanelOurChannel>
                    </Col>
                  </Row>
                  <OrgDescriptionTitle>About Me</OrgDescriptionTitle>
                  <OrgBody
                    dangerouslySetInnerHTML={{
                      __html: parseMarkdown(data.org && description),
                    }}
                  />
                </OrgDetail>
              </Col>
            </Row>
          </OrgInfo>
          <AdditionalContent data={data} />
        </React.Fragment>
      );
    }
    if (!data.loading && !data.org) {
      return (
        <BlankState
          icon={{ style: 'solid', symbol: 'file-alt' }}
          title="No document here, friend!"
          subtitle="Make sure to double check the URL! If it's correct, this is probably a private document."
        />
      );
    }

    return null;
  }
}

ViewOrg.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(orgQuery, {
  options: ({ match }) => ({
    variables: {
      _id: match.params._id,
    },
  }),
})(ViewOrg);
