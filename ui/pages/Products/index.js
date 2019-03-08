import React from 'react';
import PropTypes from 'prop-types';
import { Sticky, StickyContainer } from 'react-sticky';
import { Row, Col } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import ProductItem from '../../components/ProductItem';
import BlankState from '../../components/BlankState';
import Container from '../../components/Container';
import FilterSidebar from '../FilterSidebar';
import { products as productsQuery } from '../../queries/Product.gql';
import { TitleWrapper, SortBy, SortByTitle, SortByDropdown, GridWrapper, Block } from './styles';

const Products = ({ data }) => (
  <Container>
    <Row>
      <Col md={9}>
        <TitleWrapper>All Service</TitleWrapper>
        <SortBy className="clearfix">
          <SortByTitle>Sort by:</SortByTitle>
          <SortByDropdown>
            <select
              name="type"
              value="newService"
              // onChange={(event) => this.setState({ settingType: event.target.value })}
              className="form-control"
            >
              <option value="newService">New service</option>
              <option value="lowestPrice">Lowest Price</option>
              <option value="highestPrice">Highest Price</option>
              <option value="rating">Rating</option>
              <option value="review">Review</option>
            </select>
          </SortByDropdown>
        </SortBy>
        <GridWrapper className="clearfix">
          {/* <TotalCountSearch>
              {searchKeyword
                ? countPage > 0 ? `( ${countPage} Result Search )` : ''
                : countPage > 0 ? `( ${countPage} Available Services )` : ''}
            </TotalCountSearch> */}
          {data.products && data.products !== undefined ? (
            <div>
              {data.products.map((item) => (
                <Block key={item._id}>
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
                </Block>
              ))}
            </div>
          ) : (
            <BlankState
              icon={{ style: 'solid', symbol: 'file-alt' }}
              title="You're plum out of products, friend!"
              subtitle="Add your first product by clicking the button below."
            />
          )}
        </GridWrapper>
      </Col>
      <Col md={3}>
        <StickyContainer style={{ height: '100%' }}>
          <Sticky topOffset={-105}>
            {({ style, isSticky }) => (
              <div style={style}>
                {isSticky ? <div style={{ height: '95px' }} /> : ''}
                <FilterSidebar />
              </div>
            )}
          </Sticky>
        </StickyContainer>
      </Col>
    </Row>
  </Container>
);

Products.propTypes = {
  data: PropTypes.object.isRequired,
};

export default graphql(productsQuery)(Products);
