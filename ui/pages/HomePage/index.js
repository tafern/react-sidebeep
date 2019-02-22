import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { Row } from 'react-bootstrap';
import Styles from './styles';
import Campaign from '../Campaign';
import ProductList from '../ProductList';
import Partner from '../Partner';
import NewsInfo from '../NewsInfo';
import { products as productQuery } from '../../queries/Products.gql';

const HomePage = ({ productDataQuery }) => (
  <div>
    {/* Capaign Banner */}
    <Row>
      <Styles.HeaderCampaign md={8}>
        <Styles.HomePage>
          <Campaign />
        </Styles.HomePage>
      </Styles.HeaderCampaign>
      <Styles.HeaderCampaign md={4}>
        <Styles.CampaignPromo>
          <Styles.CampaignPromoImage src="/banner-top.jpg" alt="promo" />
        </Styles.CampaignPromo>
        <Styles.CampaignPromo>
          <Styles.CampaignPromoImage src="/banner-bottom.jpg" alt="promo" />
        </Styles.CampaignPromo>
      </Styles.HeaderCampaign>
    </Row>
    <Styles.Category className="clearfix">
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/icon2-repair.png" />
          <Styles.IconTitle>Repair</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/icon2-home-utilities.png" />
          <Styles.IconTitle>Home</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/icon2-beauty.png" />
          <Styles.IconTitle>Beauty</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/icon2-health.png" />
          <Styles.IconTitle>Health</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/icon2-fashion.png" />
          <Styles.IconTitle>Fashion</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/icon2-art.png" />
          <Styles.IconTitle>Art</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/icon2-hobbies.png" />
          <Styles.IconTitle>Hobbies</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/icon2-other.png" />
          <Styles.IconTitle>Others</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
    </Styles.Category>
    <Styles.Products>
      <Styles.Wrapper className="clearfix">
        <Styles.ProductTitle className="pull-left">Recommendation</Styles.ProductTitle>
        <Styles.WrapperViewAll className="pull-right" to="/products">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      <Styles.ProductDescription>
        Services that are mostly orders by our customers
      </Styles.ProductDescription>
      {/* Products */}
      <ProductList data={productDataQuery} />
    </Styles.Products>
    <Styles.News>
      <Styles.Wrapper className="clearfix">
        <Styles.NewsTitle className="pull-left">News</Styles.NewsTitle>
        <Styles.WrapperViewAll className="pull-right underLinkView" to="/news">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* News */}
      <NewsInfo />
    </Styles.News>
    <Styles.Products>
      <Styles.Wrapper className="clearfix">
        <Styles.ProductTitle className="pull-left">All Services</Styles.ProductTitle>
        <Styles.WrapperViewAll className="pull-right underLinkView" to="/products">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* Products */}
      <ProductList data={productDataQuery} isSmall />
    </Styles.Products>
    <Styles.MediaPartner>
      <Styles.Wrapper>
        <Styles.H3>Media Patner</Styles.H3>
      </Styles.Wrapper>
      {/* Media Partner */}
      <Partner />
    </Styles.MediaPartner>
    {/* <Styles.VideoWrapper>
      <iframe
        className="player"
        title="sidebeep-intro"
        type="text/html"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/wR5Irqh0BN0"
        frameBorder="0"
      />
    </Styles.VideoWrapper> */}
  </div>
);
HomePage.propTypes = {
  productDataQuery: PropTypes.object.isRequired,
};
export default graphql(productQuery, {
  name: 'productDataQuery',
})(withRouter(HomePage));
