import React from 'react';
import { TelephoneInbound, TelephoneOutbound } from 'react-bootstrap-icons';

const ActivityIcon = ({ activity }) => {
  if (activity.direction === 'inbound') {
    return <TelephoneInbound />;
  }
  if (activity.direction === 'outbound') {
    return <TelephoneOutbound />;
  }
};

export default ActivityIcon;
