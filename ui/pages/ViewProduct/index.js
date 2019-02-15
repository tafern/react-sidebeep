import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { Bert } from 'meteor/themeteorchef:bert';
import MainContent from './MainContent';
import AdditionalContent from './AdditionalContent';
import ProductList from '../ProductList';
import SEO from '../../components/SEO';
import BlankState from '../../components/BlankState';
import { product as productQuery, products as productsQuery } from '../../queries/Products.gql';
import { addTrxItem as addTrxItemMutation } from '../../mutations/TrxItem.gql';
import { StyledViewProduct, Products, ProductName } from './styles';
import delay from '../../../modules/delay';
// import parseMarkdown from '../../../modules/parseMarkdown';

class ViewProduct extends React.Component {
  componentWillMount() {
    this.props.productDataQuery.refetch();
    this.props.productsDataQuery.refetch();
  }
  handleAddToCart = () => {
    console.log('meteor', Meteor.userId());
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
          console.log('error', error);
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
  render() {
    const { productDataQuery, productsDataQuery } = this.props;
    console.log('.addTrxItemDataMutation', this.props);
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
          <Products>
            <ProductName>Recommended for you in</ProductName>
            <ProductList data={productsDataQuery} />
          </Products>
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
