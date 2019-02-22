import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import ProductItem from '../../components/ProductItem';
import BlankState from '../../components/BlankState';
import { products as productsQuery } from '../../queries/Products.gql';
import Styles from './styles';

const Products = ({ data }) => (
  <Styles.GridWrapper className="clearfix">
    {/* <TotalCountSearch>
        {searchKeyword
          ? countPage > 0 ? `( ${countPage} Result Search )` : ''
          : countPage > 0 ? `( ${countPage} Available Services )` : ''}
      </TotalCountSearch> */}
    {data.products && data.products !== undefined ? (
      <div>
        {data.products.map((item) => (
          <Styles.Block key={item._id}>
            <ProductItem
              productName={item.name}
              updatedAt={item.updatedAt}
              productDescription={item.description}
              price={item.price}
              orderCount={item.orderCount}
              viewCount={item.viewCount}
              org={item.user}
              files={item.files}
              isPublic={item.isPublic}
              id={item._id}
              isGrid
            />
          </Styles.Block>
        ))}
      </div>
    ) : (
      <BlankState
        icon={{ style: 'solid', symbol: 'file-alt' }}
        title="You're plum out of products, friend!"
        subtitle="Add your first product by clicking the button below."
      />
    )}
  </Styles.GridWrapper>
);

Products.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(productsQuery)(Products);
