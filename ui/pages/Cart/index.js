import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { timeago } from '../../../modules/dates';
import BlankState from '../../components/BlankState';
import { StyledCart, CartList, CartWrapper } from './styles';
import { trxs as trxQuery } from '../../queries/Trxs.gql';

const Cart = (data) => (
  <StyledCart>
    {console.log('data', data)}
    {data.data.trxs !== undefined && data.data.trxs.length > 0 ? (
      <CartList>
        {data.data.trxs.map((item) => (
          <CartWrapper key={item._id}>
            <Link to={`/product/view/${item._id}`} />
            <header>
              {item.status === 'read' ? (
                <span className="label label-success">Read</span>
              ) : (
                <span className="label label-default">Unread</span>
              )}
              <h2>{item.title}</h2>
              <p>{timeago(item.created_at)}</p>
            </header>
          </CartWrapper>
        ))}
      </CartList>
    ) : (
      <BlankState
        icon={{ style: 'solid', symbol: 'file-alt' }}
        title="Empty Services, Please Add to Cart of Service"
        subtitle="Add your first product by clicking the button below."
      />
    )}
  </StyledCart>
);

export default graphql(trxQuery)(Cart);
