import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../../components/ProductItem';
import BlankState from '../../../components/BlankState';
import { CountProductListInfo, GridWrapper, Block } from '../styles';

const AllProducts = ({ data }) => (
  <div>
    <CountProductListInfo>
      Display 5.702 product for Beauty Promo Jumbo (1 - 60 dari 5.702)
    </CountProductListInfo>
    <GridWrapper className="clearfix">
      {data.org.products && data.org.products !== undefined ? (
        <div>
          {data.org.products.map((item) => (
            <Block key={item._id}>
              <ProductItem
                productName={item.name}
                updatedAt={item.updatedAt}
                productDescription={item.description}
                files={item.files}
                isPublic={item.isPublic}
                id={item._id}
                org={data.org}
                isGrid
              />
            </Block>
          ))}
        </div>
      ) : (
        <BlankState
          icon={{ style: 'solid', symbol: 'file-alt' }}
          title="You're plum out of orgs, friend!"
          subtitle="Add your first org by clicking the button below."
        />
      )}
    </GridWrapper>
  </div>
);

AllProducts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AllProducts;
