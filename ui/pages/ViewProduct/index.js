import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import SEO from '../../components/SEO';
import parseMarkdown from '../../../modules/parseMarkdown';
import BlankState from '../../components/BlankState';
import { product as productQuery } from '../../queries/Products.gql';
import Styles from './styles';

class ViewProduct extends React.Component {
  componentWillMount() {
    this.props.data.refetch();
  }
  render() {
    const { data } = this.props;
    if (!data.loading && data.product) {
      return (
        <React.Fragment>
          <Styles.StyledViewProduct>
            <SEO
              title={data.product && data.product.name}
              description={data.product && data.product.description}
              url={`product/view/${data.product && data.product._id}`}
              contentType="article"
              created={data.product && data.product.createdAt}
              twitter="clvrbgl"
            />
            <React.Fragment>
              <h1>{data.product && data.product.name}</h1>
              <Styles.ProductBody
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(data.product && data.product.description),
                }}
              />
            </React.Fragment>
          </Styles.StyledViewProduct>
        </React.Fragment>
      );
    }
    if (!data.loading && !data.product) {
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
  data: PropTypes.object.isRequired,
};

export default graphql(productQuery, {
  options: ({ match }) => ({
    variables: {
      _id: match.params._id,
    },
  }),
})(ViewProduct);
