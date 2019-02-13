import React from 'react';
import { Link } from 'react-router-dom';
import { timeago } from '../../../modules/dates';
import { StyledOrders, OrdersList, Order } from './styles';
import OrderData from './Orders';

const orderLists = OrderData;
const Orders = () => (
  <StyledOrders>
    <OrdersList>
      {orderLists.data.orders.map((item) => (
        <Order key={item._id}>
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
        </Order>
      ))}
    </OrdersList>
  </StyledOrders>
);

export default Orders;
