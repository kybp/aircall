import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import ActivityIcon from './ActivityIcon.jsx';

const ActivityFeedItem = ({ activity }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/activities/show/${activity.id}`);

  return (
    <Card className="feed-item" onClick={handleClick}>
      <Card.Body>
        <Card.Title>
          <div className="description">
            <ActivityIcon activity={activity} />
            {activity.from} called {activity.to} on {activity.via}
          </div>
        </Card.Title>
        <div className="info">
          {new Date(activity.created_at).toLocaleTimeString()}
          for {activity.duration}s
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActivityFeedItem;
