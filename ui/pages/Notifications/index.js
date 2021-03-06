import React from 'react';
import { Link } from 'react-router-dom';
import { timeago } from '../../../modules/dates';
import { StyledNotifications, NotificationsList, Notification } from './styles';
import NotificationData from './Notifications';

const notificationLists = NotificationData;
const Notifications = () => (
  <StyledNotifications>
    <NotificationsList>
      {notificationLists.data.notifications.map((item) => (
        <Notification key={item._id}>
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
        </Notification>
      ))}
    </NotificationsList>
  </StyledNotifications>
);

export default Notifications;
