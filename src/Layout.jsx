import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Outlet } from 'react-router-dom';

import Header from './Header.jsx';
import NotificationList from './NotificationList.jsx';
import { NotificationsContext, useNotifications } from './notifications';

const Layout = () => {
  const notifications = useNotifications();

  return (
    <NotificationsContext.Provider value={notifications}>
      <div className="container">
        <Header />
        <div className="container-view">
          <Outlet />
        </div>
        <NotificationList />
      </div>
    </NotificationsContext.Provider>
  );
};

export default Layout;
