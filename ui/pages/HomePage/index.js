import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import { Row, Col } from 'react-bootstrap';
import Styles from './styles';
import Campaign from '../Campaign';
import OrgList from '../OrgList';
import ProductList from '../ProductList';
import Partner from '../Partner';
import NewsInfo from '../NewsInfo';
import { orgs as orgQuery } from '../../queries/Orgs.gql';
import { products as productQuery } from '../../queries/Products.gql';

const HomePage = ({ orgDataQuery, productDataQuery }) => (
  <div>
    {console.log('orgData', orgDataQuery)}
    {console.log('productData', productDataQuery)}
    <Row>
      <Col md={7}>
        <Styles.HomePage>
          {/* Capaign Banner */}
          <Campaign />
        </Styles.HomePage>
      </Col>
      <Col md={5}>
        <Styles.Category>
          <Row>
            <Col xs={3} md={3}>
              <Styles.CategoryLink to="/category">
                <Styles.CategoryWrapper>
                  <Styles.IconCategory className="icon ion-md-construct" />
                  <p>Repair</p>
                </Styles.CategoryWrapper>
              </Styles.CategoryLink>
            </Col>
            <Col xs={3} md={3}>
              <Styles.CategoryWrapper>
                <Styles.CategoryLink to="/category">
                  <Styles.IconCategory className="icon ion-md-home" />
                  <p>Home</p>
                </Styles.CategoryLink>
              </Styles.CategoryWrapper>
            </Col>
            <Col xs={3} md={3}>
              <Styles.CategoryWrapper>
                <Styles.CategoryLink to="/category">
                  <Styles.IconCategory className="icon ion-md-briefcase" />
                  <p>Beauty</p>
                </Styles.CategoryLink>
              </Styles.CategoryWrapper>
            </Col>
            <Col xs={3} md={3}>
              <Styles.CategoryWrapper>
                <Styles.CategoryLink to="/category">
                  <Styles.IconCategory className="icon ion-md-fitness" />
                  <p>Health</p>
                </Styles.CategoryLink>
              </Styles.CategoryWrapper>
            </Col>
            <Col xs={3} md={3}>
              <Styles.CategoryWrapper>
                <Styles.CategoryLink to="/category">
                  <Styles.IconCategory className="icon ion-md-brush" />
                  <p>Fashion</p>
                </Styles.CategoryLink>
              </Styles.CategoryWrapper>
            </Col>
            <Col xs={3} md={3}>
              <Styles.CategoryWrapper>
                <Styles.CategoryLink to="/category">
                  <Styles.IconCategory className="icon ion-md-color-palette" />
                  <p>Art</p>
                </Styles.CategoryLink>
              </Styles.CategoryWrapper>
            </Col>
            <Col xs={3} md={3}>
              <Styles.CategoryWrapper>
                <Styles.CategoryLink to="/category">
                  <Styles.IconCategory className="icon ion-md-tennisball" />
                  <p>Hobbies</p>
                </Styles.CategoryLink>
              </Styles.CategoryWrapper>
            </Col>
            <Col xs={3} md={3}>
              <Styles.CategoryWrapper>
                <Styles.CategoryLink to="/category">
                  <Styles.IconCategory className="icon ion-md-journal" />
                  <p>Others</p>
                </Styles.CategoryLink>
              </Styles.CategoryWrapper>
            </Col>
          </Row>
        </Styles.Category>
      </Col>
    </Row>
    <Styles.Products>
      <Styles.Wrapper className="clearfix">
        <Styles.ProductTitle className="pull-left">All Siders</Styles.ProductTitle>
        <Styles.WrapperViewAll className="pull-right">
          <Link className="underLinkView" to="/orgs">
            View all
          </Link>
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      <Styles.ProductDescription>
        Services that are mostly orders by our customers
      </Styles.ProductDescription>
      {/* Orgs */}
      <OrgList data={orgDataQuery} />
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
        <Styles.WrapperViewAll className="pull-right">
          <Link className="underLinkView" to="/products">
            View all
          </Link>
        </Styles.WrapperViewAll>
      </Styles.Wrapper>
      {/* Products */}
      <ProductList data={productDataQuery} />
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
  orgDataQuery: PropTypes.object.isRequired,
  productDataQuery: PropTypes.object.isRequired,
};
export default compose(
  graphql(orgQuery, {
    name: 'orgDataQuery',
  }),
  graphql(productQuery, {
    name: 'productDataQuery',
  }),
)(withRouter(HomePage));
