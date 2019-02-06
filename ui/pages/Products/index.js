import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import { timeago } from '../../../modules/dates';
import BlankState from '../../components/BlankState';
import { StyledProducts, ProductsList, Product } from './styles';
import { products } from '../../queries/Products.gql';
import { addProduct } from '../../mutations/Products.gql';

const Products = ({ data, mutate }) => (
  <StyledProducts>
    <header className="clearfix">
      <Button bsStyle="success" onClick={mutate}>
        New Product
      </Button>
    </header>
    {data.products && data.products.length ? (
      <ProductsList>
        {data.products.map(({ _id, isPublic, productName, productDescription, updatedAt }) => (
          <Product key={_id}>
            <Link to={`/products/${_id}/edit`} />
            <header>
              {isPublic ? (
                <span className="label label-success">Public</span>
              ) : (
                <span className="label label-default">Private</span>
              )}
              <h2>{productName}</h2>
              <p>{productDescription}</p>
              <p>{timeago(updatedAt)}</p>
            </header>
          </Product>
        ))}
      </ProductsList>
    ) : (
      <BlankState
        icon={{ style: 'solid', symbol: 'file-alt' }}
        title="You're plum out of products, friend!"
        subtitle="Add your first product by clicking the button below."
        action={{
          style: 'success',
          onClick: mutate,
          label: 'Create Your First Product',
        }}
      />
    )}
  </StyledProducts>
);

Products.propTypes = {
  // userId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
};

export default compose(
  graphql(products),
  graphql(addProduct, {
    options: ({ history }) => ({
      refetchQueries: [{ query: products }],
      onCompleted: (mutation) => {
        history.push(`/products/${mutation.addProduct._id}/edit`);
      },
    }),
  }),
)(Products);
