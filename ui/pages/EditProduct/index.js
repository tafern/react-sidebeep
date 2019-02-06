import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import ProductEditor from '../../components/ProductEditor';
import Loading from '../../components/Loading';
import NotFound from '../NotFound';
import { editProduct as editProductQuery } from '../../queries/Products.gql';

const EditProduct = ({ data, history }) => (
  <React.Fragment>
    {!data.loading ? (
      <React.Fragment>
        {data.product ? <ProductEditor doc={data.product} history={history} /> : <NotFound />}
      </React.Fragment>
    ) : (
      <Loading />
    )}
  </React.Fragment>
);

EditProduct.propTypes = {
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default graphql(editProductQuery, {
  options: ({ match }) => ({
    variables: {
      _id: match.params._id,
    },
  }),
})(EditProduct);
