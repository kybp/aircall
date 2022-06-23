import React, { createContext, useCallback, useState } from 'react';

export const NotificationsContext = createContext({
  notifications: [],
  error: () => {},
  success: () => {},
});

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const pushNotification = (notification) => {
    setNotifications((ns) => ns.concat(notification));
  };

  return {
    notifications,

    error(message) {
      pushNotification({ type: 'error', message });
    },

    success(message) {
      pushNotification({ type: 'success', message });
    },
  };
};
