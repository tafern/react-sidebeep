import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import SEO from '../../components/SEO';
import BlankState from '../../components/BlankState';
import Comments from '../../components/Comments';
import { product as productQuery } from '../../queries/Products.gql';
import commentAdded from '../../subscriptions/Comments.gql';
import parseMarkdown from '../../../modules/parseMarkdown';

import { StyledViewProduct, ProductBody } from './styles';

class ViewProduct extends React.Component {
  componentWillMount() {
    const { data } = this.props;
    if (Meteor.isClient && Meteor.userId()) data.refetch();
  }

  render() {
    const { data } = this.props;

    if (!data.loading && data.product) {
      return (
        <React.Fragment>
          <StyledViewProduct>
            <SEO
              title={data.product && data.product.title}
              description={data.product && data.product.body}
              url={`products/${data.product && data.product._id}`}
              contentType="article"
              published={data.product && data.product.createdAt}
              updated={data.product && data.product.updatedAt}
              twitter="clvrbgl"
            />
            <React.Fragment>
              <h1>{data.product && data.product.title}</h1>
              <ProductBody
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(data.product && data.product.body),
                }}
              />
            </React.Fragment>
          </StyledViewProduct>
          <Comments
            subscribeToNewComments={() =>
              data.subscribeToMore({
                product: commentAdded,
                variables: {
                  productId: data.product && data.product._id,
                },
                updateQuery: (existingData, { subscriptionData }) => {
                  if (!subscriptionData.data) return existingData;
                  const newComment = subscriptionData.data.commentAdded;
                  return {
                    product: {
                      ...existingData.product,
                      comments: [...existingData.product.comments, newComment],
                    },
                  };
                },
              })
            }
            productId={data.product && data.product._id}
            comments={data.product && data.product.comments}
          />
        </React.Fragment>
      );
    }

    if (!data.loading && !data.product) {
      return (
        <BlankState
          icon={{ style: 'solid', symbol: 'file-alt' }}
          title="No product here, friend!"
          subtitle="Make sure to double check the URL! If it's correct, this is probably a private product."
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
