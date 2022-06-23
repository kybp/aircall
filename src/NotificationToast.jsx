import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const variant = ({ type }) => {
  return {
    error: 'danger',
    success: 'success',
  }[type];
};

const title = ({ type }) => {
  const result = {
    error: 'Error',
    success: 'OK!',
  }[type];

  if (result === undefined) {
    throw new Error('weird type: ' + type);
  }

  return result;
};

const NotificationToast = ({ notification }) => {
  const [show, setShow] = useState(true);

  return (
    <Toast
      show={show}
      onClose={() => setShow(false)}
      bg={variant(notification)}
    >
      <Toast.Header>{title(notification)}</Toast.Header>
      <Toast.Body className="text-white">{notification.message}</Toast.Body>
    </Toast>
  );
};

export default NotificationToast;
