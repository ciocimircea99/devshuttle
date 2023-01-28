import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { DSPage, topSitePages } from '../model/DSPage';
import { bottomSitePages } from './../model/DSPage';

interface DSDrawerProps {
  drawerOpen: boolean,
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
}

export default function DSDrawer({ drawerOpen, toggleDrawer, ...props }: DSDrawerProps) {

  const drawerMenu = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {topSitePages.map((page: DSPage, index) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {page.iconComponent}
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {bottomSitePages.map((page: DSPage, index) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {page.iconComponent}
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Drawer
        anchor='top'
        open={drawerOpen}
        variant="persistent"
        onClick={toggleDrawer(false)}
        sx={{
          width: 'auto',
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 'auto', height:'100%', boxSizing: 'border-box' },
        }}
        onClose={toggleDrawer(false)}
      >
        {drawerMenu()}
      </Drawer>
    </Box>
  );
}
