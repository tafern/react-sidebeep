import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { Row } from 'react-bootstrap';
import Styles from './styles';
import Campaign from '../Campaign';
import ProductList from '../ProductList';
import Video from '../Video';
import Partner from '../Partner';
import NewsInfo from '../NewsInfo';
import { products as productQuery } from '../../queries/Product.gql';

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
          <Styles.CampaignPromoImage src="/img/banner-top.jpg" alt="promo" />
        </Styles.CampaignPromo>
        <Styles.CampaignPromo>
          <Styles.CampaignPromoImage src="/img/banner-bottom.jpg" alt="promo" />
        </Styles.CampaignPromo>
      </Styles.HeaderCampaign>
    </Row>
    <Styles.Category className="clearfix">
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/categories/category-repair.png" />
          <Styles.IconTitle>Repair</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/categories/category-homecare.png" />
          <Styles.IconTitle>Home Care</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/categories/category-beauty-groom.png" />
          <Styles.IconTitle>Beauty & Grooming</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/categories/category-health.png" />
          <Styles.IconTitle>Health</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/categories/category-fashion.png" />
          <Styles.IconTitle>Fashion</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/categories/category-art.png" />
          <Styles.IconTitle>Art</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/categories/category-hobbies.png" />
          <Styles.IconTitle>Hobbies</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
      <Styles.CategoryLine />
      <Styles.CategoryLink to="/category">
        <Styles.CategoryWrapper>
          <Styles.IconCategory src="/img/icons/categories/category-others.png" />
          <Styles.IconTitle>Others</Styles.IconTitle>
        </Styles.CategoryWrapper>
      </Styles.CategoryLink>
    </Styles.Category>
    <Styles.Product>
      <Styles.Wrapper className="clearfix">
        <Styles.ProductTitle className="pull-left">Recommendation</Styles.ProductTitle>
        <Styles.WrapperViewAll className="pull-right" to="/products">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* <Styles.ProductDescription>
        Services that are mostly orders by our customers
      </Styles.ProductDescription> */}
      {/* Products */}
      <ProductList data={productDataQuery} />
    </Styles.Product>
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
    <Styles.Product>
      <Styles.Wrapper className="clearfix">
        <Styles.ProductTitle className="pull-left">For Female</Styles.ProductTitle>
        <Styles.WrapperViewAll className="pull-right underLinkView" to="/products">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* Products */}
      <ProductList data={productDataQuery} />
    </Styles.Product>
    <Styles.Product>
      <Styles.Wrapper className="clearfix">
        <Styles.ProductTitle className="pull-left">For Male</Styles.ProductTitle>
        <Styles.WrapperViewAll className="pull-right underLinkView" to="/products">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* Products */}
      <ProductList data={productDataQuery} />
    </Styles.Product>
    <Styles.Product>
      <Styles.Wrapper className="clearfix">
        <Styles.ProductTitle className="pull-left">New Services</Styles.ProductTitle>
        <Styles.WrapperViewAll className="pull-right underLinkView" to="/products">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* Product */}
      <ProductList data={productDataQuery} isSmall />
    </Styles.Product>
    <Styles.Videos>
      <Styles.Wrapper className="clearfix">
        <Styles.VideoTitle className="pull-left">Videos</Styles.VideoTitle>
        <Styles.WrapperViewAll className="pull-right underLinkView" to="/videos">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* Videos */}
      <Video />
    </Styles.Videos>
    <Styles.MediaCoverage>
      <Styles.Wrapper className="clearfix">
        <Styles.MediaTitle className="pull-left">Media Coverage</Styles.MediaTitle>
        <Styles.WrapperViewAll className="pull-right underLinkView" to="/videos">
          View all
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* Media Coverage */}
      <Partner />
    </Styles.MediaCoverage>
  </div>
);
HomePage.propTypes = {
  productDataQuery: PropTypes.object.isRequired,
};
export default graphql(productQuery, {
  name: 'productDataQuery',
})(withRouter(HomePage));
