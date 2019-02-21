import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { Sticky, StickyContainer } from 'react-sticky';
import { Row, Col } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import MainContent from './MainContent';
import AdditionalContent from './AdditionalContent';
import SiderSidebar from './SiderSidebar';
import OtherProduct from '../OtherProduct';
import SEO from '../../components/SEO';
import BlankState from '../../components/BlankState';
import { product as productQuery, products as productsQuery } from '../../queries/Products.gql';
import { addTrxItem as addTrxItemMutation } from '../../mutations/TrxItem.gql';
import { StyledViewProduct } from './styles';
import delay from '../../../modules/delay';
// import parseMarkdown from '../../../modules/parseMarkdown';

class ViewProduct extends React.Component {
  componentWillMount() {
    this.props.productDataQuery.refetch();
    this.props.productsDataQuery.refetch();
  }
  handleAddToCart = () => {
    if (!this.props.authenticated) {
      this.props.history.push(`/login`);
    }
    delay(() => {
      this.props.addTrxItem(
        {
          variables: {
            trxId: '',
            buyer: Meteor.userId(),
            productId: this.props.match.params._id,
            qty: '1',
          },
        },
        (error) => {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            console.log('tidak error');
            Bert.alert('Cart!', 'success');
            this.props.history.push('/cart');
          }
        },
      );
    }, 300);
  };
  handleRedirectToSiderDetail = () => {
    this.props.history.push(`/org/fEjfJn9wArz8aeb4m`);
  };
  render() {
    const { productDataQuery, productsDataQuery } = this.props;
    if (
      !productDataQuery.loading &&
      productDataQuery.product &&
      !productsDataQuery.loading &&
      productsDataQuery.products
    ) {
      const item = productDataQuery.product;
      if (Meteor.isClient && Meteor.userId()) {
        console.log('UserId', Meteor.userId());
      }
      console.log('productDataQuery', productDataQuery);
      return (
        <StyledViewProduct>
          <SEO
            title={item.name}
            description={item.description}
            url={`product/view/${item._id}`}
            contentType="article"
            created={item.createdAt}
            twitter="clvrbgl"
          />
          <Row>
            <Col md={9}>
              <MainContent
                productName={item.name}
                createdAt={item.createdAt}
                productDescription={item.description}
                files={item.files}
                isPublic={item.isPublic}
                addToCart={this.handleAddToCart}
              />
              <AdditionalContent />
              {/* <React.Fragment>
                <h1>{item && item.name}</h1>
                <Styles.ProductBody
                  dangerouslySetInnerHTML={{
                    __html: parseMarkdown(item && item.description),
                  }}
                />
              </React.Fragment> */}
            </Col>
            <Col md={3}>
              <StickyContainer style={{ height: '100%' }}>
                <Sticky topOffset={-105}>
                  {({ style, isSticky }) => (
                    <div style={style}>
                      {isSticky ? <div style={{ height: '95px' }} /> : ''}
                      <SiderSidebar onSiderDetailClicked={this.handleRedirectToSiderDetail} />
                    </div>
                  )}
                </Sticky>
              </StickyContainer>
            </Col>
            <Col md={12}>
              <OtherProduct productsDataQuery={productsDataQuery} />
            </Col>
          </Row>
        </StyledViewProduct>
      );
    }
    if (!productDataQuery.loading && !productDataQuery.product) {
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
ViewProduct.propTypes = {
  productDataQuery: PropTypes.object.isRequired,
  productsDataQuery: PropTypes.object.isRequired,
  addTrxItem: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
};
export default compose(
  graphql(productQuery, {
    name: 'productDataQuery',
    options: ({ match }) => ({
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(productsQuery, {
    name: 'productsDataQuery',
  }),
  graphql(addTrxItemMutation, {
    name: 'addTrxItem',
    options: ({ history }) => ({
      onCompleted: () => {
        Bert.alert('Cart!', 'success');
        history.push('/cart');
      },
    }),
  }),
)(ViewProduct);
