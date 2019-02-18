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
          <Styles.IconCategory className="icon ion-md-construct" />
          Repair
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory className="icon ion-md-home" />
          Home
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory className="icon ion-md-briefcase" />
          Beauty
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory className="icon ion-md-fitness" />
          Health
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory className="icon ion-md-brush" />
          Fashion
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory className="icon ion-md-color-palette" />
          Art
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory className="icon ion-md-tennisball" />
          Hobbies
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory className="icon ion-md-journal" />
          Others
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
    </Styles.Category>
    <Styles.Products>
      <Styles.Wrapper className="clearfix">
        <Styles.ProductTitle className="pull-left">Recommendation</Styles.ProductTitle>
        <Styles.WrapperViewAll className="pull-right underLinkView" to="/products">
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
      <Styles.Wrapper>
        <Styles.H3>News</Styles.H3>
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
  </div>
);
HomePage.propTypes = {
  productDataQuery: PropTypes.object.isRequired,
};
export default graphql(productQuery, {
  name: 'productDataQuery',
})(withRouter(HomePage));
