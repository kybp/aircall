import React, { useContext } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';

import NotificationToast from './NotificationToast.jsx';
import { NotificationsContext } from './notifications';

const NotificationList = () => {
  const { notifications } = useContext(NotificationsContext);

  return (
    <ToastContainer position="top-end">
      {notifications.map((notification, i) => (
        <NotificationToast key={i} notification={notification} />
      ))}
    </ToastContainer>
  );
};

export default NotificationList;
