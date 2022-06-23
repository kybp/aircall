import React, { useCallback } from 'react';
import Button from 'react-bootstrap/Button';

import { updateActivity, useApi } from './api';

const ToggleActivityArchivedButton = ({
  activity: { is_archived: isArchived },
}) => {
  const api = useApi(updateActivity({ is_archived: !isArchived }), {
    initiallyLoading: false,
  });
  const toggleArchived = useCallback(api.request, [isArchived]);

  return (
    <Button variant="primary" onClick={toggleArchived} disabled={api.loading}>
      {isArchived ? 'Un-archive' : 'Archive'}
    </Button>
  );
};

export default ToggleActivityArchivedButton;
