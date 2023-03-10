import { DropdownBase } from '@cryptomines/core';
import { Notification as NotificationIcon } from '@cryptomines/icons';
import { Badge, Box, Button } from '@mui/material';
import React from 'react';

import useNotifications from '../../hooks/useNotifications';
import NotificationsMenu from './NotificationsMenu';

const buttonStyle = (theme) => ({
  minWidth: 0,
  borderRadius: 2,
  borderColor: theme.palette.mode === 'dark' ? 'border.dark' : 'border.main',
  height: '42px',
  '&:hover': {
    borderColor: theme.palette.mode === 'dark' ? 'border.dark' : 'border.main',
  },
});

export default function NotificationsDropdown() {
  const { unseenCount, setAsSeen } = useNotifications();

  return (
    <DropdownBase>
      {({ onClose, onToggle }) => [
        <Button
          key="button"
          onClick={(event) => {
            onToggle(event);
            setAsSeen();
          }}
          variant="text"
          color="info"
          size="small"
          sx={buttonStyle}
        >
          <Badge color="primary" badgeContent={unseenCount} invisible={!unseenCount}>
            <NotificationIcon color="info" />
          </Badge>
        </Button>,
        <Box sx={{ minWidth: 360 }}>
          <NotificationsMenu onClose={onClose} size={3} />
        </Box>,
      ]}
    </DropdownBase>
  );
}
