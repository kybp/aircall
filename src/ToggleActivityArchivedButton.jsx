import React, { useCallback, useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { updateActivity, useApi } from './api';
import { NotificationsContext } from './notifications';

const ToggleActivityArchivedButton = ({
  activity: { is_archived: isArchived },
}) => {
  const api = useApi(updateActivity({ is_archived: !isArchived }), {
    initiallyLoading: false,
  });
  const notify = useContext(NotificationsContext);
  const toggleArchived = useCallback(async () => {
    await api.request();

    notify.success('Activity successfully archived.');
  }, [isArchived]);

  return (
    <Button variant="primary" onClick={toggleArchived} disabled={api.loading}>
      {isArchived ? 'Un-archive' : 'Archive'}
    </Button>
  );
};

export default ToggleActivityArchivedButton;
