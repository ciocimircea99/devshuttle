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
import zIndex from '@mui/material/styles/zIndex';

export const DRAWER_LEFT_PADDING_SM = '12px'
export const DRAWER_LEFT_PADDING_MD = '20px'

interface DSDrawerProps {
  drawerOpen: boolean,
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
}

export default function DSDrawer({ drawerOpen, toggleDrawer, ...props }: DSDrawerProps) {

  const theme = useTheme()

  const renderPageEntry = (page: DSPage) => (
    <div>
      <ListItem
        key={page.title}
        disablePadding
      >
        <ListItemButton>
          <ListItemIcon sx={{
            [theme.breakpoints.down('sm')]: {
              paddingLeft: DRAWER_LEFT_PADDING_SM
            },
            [theme.breakpoints.up('sm')]: {
              paddingLeft: DRAWER_LEFT_PADDING_MD
            },
            color: 'white'
          }}>
            {page.iconComponent}
          </ListItemIcon>
          <ListItemText sx={{ color: 'white' }}
            primary={page.title}
          />
        </ListItemButton>
      </ListItem>
      {page.subpages.map((page: DSPage) => (
        <ListItem
          key={page.title}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon sx={{
              [theme.breakpoints.down('sm')]: {
                paddingLeft: DRAWER_LEFT_PADDING_SM
              },
              [theme.breakpoints.up('sm')]: {
                paddingLeft: DRAWER_LEFT_PADDING_MD
              },
              color: 'white',
              marginLeft: theme.spacing(2)
            }}>
              {page.iconComponent}
            </ListItemIcon>
            <ListItemText sx={{ color: 'white' }}
              primary={page.title}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  )

  const drawerMenu = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {topSitePages.map((page: DSPage, index) => renderPageEntry(page))}
      </List>
      <Divider />
      <List>
        {bottomSitePages.map((page: DSPage, index) => renderPageEntry(page))}
      </List>
    </Box >
  );

  return (
    <Drawer
      anchor='left'
      open={drawerOpen}
      variant="temporary"
      hideBackdrop
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
          },
          backgroundColor: theme.palette.primary.main
        },
        zIndex: 5,
      }}
      onClose={toggleDrawer(false)}
    >
      {drawerMenu()}
    </Drawer>
  );
}
