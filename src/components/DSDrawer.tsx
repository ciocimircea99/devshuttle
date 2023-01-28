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
import { useTheme } from '@mui/material/styles';
import { APP_BAR_HEIGHT_MD, APP_BAR_HEIGHT_SM } from './DSAppBar';


interface DSDrawerProps {
  drawerOpen: boolean,
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
}

export default function DSDrawer({ drawerOpen, toggleDrawer, ...props }: DSDrawerProps) {

  const theme = useTheme()

  const drawerMenu = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {topSitePages.map((page: DSPage, index) => (
          <ListItem
            key={page.title}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon
                sx={{ paddingLeft: '20px' }}
              >
                {page.iconComponent}
              </ListItemIcon>
              <ListItemText
                primary={page.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {bottomSitePages.map((page: DSPage, index) => (
          <ListItem
            key={page.title}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon
                sx={{ paddingLeft: '20px' }}
              >
                {page.iconComponent}
              </ListItemIcon>
              <ListItemText
                primary={page.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor='left'
      open={drawerOpen}
      variant="persistent"
      onClick={toggleDrawer(false)}
      sx={{
        width: 'auto',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 'auto',
          height: '100%',
          boxSizing: 'border-box',
          [theme.breakpoints.down('sm')]: {
            marginTop: APP_BAR_HEIGHT_SM
          },
          [theme.breakpoints.up('sm')]: {
            marginTop: APP_BAR_HEIGHT_MD
          }
        },
      }}
      onClose={toggleDrawer(false)}
    >
      {drawerMenu()}
    </Drawer>
  );
}
