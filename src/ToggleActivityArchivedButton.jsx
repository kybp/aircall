import React, { useCallback, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { updateActivity, useApi } from './api';
import { NotificationsContext } from './notifications';

const ToggleActivityArchivedButton = ({
  activity: { id: activityId, is_archived: isArchived },
}) => {
  const api = useApi(updateActivity(activityId, { is_archived: !isArchived }), {
    initiallyLoading: false,
  });

  const verb = isArchived ? 'Un-archive' : 'Archive';

  const navigate = useNavigate();
  const notify = useContext(NotificationsContext);

  const toggleArchived = useCallback(async () => {
    await api.request();
    await new Promise((resolve) => {
      // If we redirect immediately, we get a 304 from the server.
      setTimeout(() => resolve(), 200);
    });
    navigate(isArchived ? '/activities/archived' : '/activities');
    notify.success(`Activity successfully ${verb.toLowerCase()}d.`);
  }, [isArchived]);

  return (
    <Button variant="primary" onClick={toggleArchived} disabled={api.loading}>
      {verb}
    </Button>
  );
};

export default ToggleActivityArchivedButton;
