import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityFeedItem = ({ activity }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/activities/${activity.id}`);

  return <span onClick={handleClick}>activity {activity.id}</span>;
};

export default ActivityFeedItem;
