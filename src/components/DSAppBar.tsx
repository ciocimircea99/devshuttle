import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import AdbIcon from '@mui/icons-material/Adb';
import { bottomSitePages, topSitePages } from '../model/DSPage';
import { DSPage } from '../model/DSPage';
import { useTheme } from '@mui/material/styles';
import DSAppBarPageCategoryButton from './DSAppBarPageCategoryButton';
import { useNavigate } from 'react-router-dom';

export const APP_BAR_HEIGHT_SM = '54px'
export const APP_BAR_HEIGHT_MD = '64px'

interface DSAppBarProps {
  drawerOpen: boolean,
  toggleDrawer: (open: boolean) => any,
}

export default function DSAppBar({ drawerOpen, toggleDrawer, ...props }: DSAppBarProps) {

  const theme = useTheme()
  const navigate = useNavigate()

  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const renderPageEntry = (page: DSPage) => {
    if (page.subpages.length === 0) {
      return (
        <Button
          key={page.title}
          sx={{ my: 2, color: 'white', display: 'block' }}
          onClick={() => navigate(page.route)}
        >
          {page.title}
        </Button >
      )
    }
    else {
      return <DSAppBarPageCategoryButton page={page} />
    }
  }

  return (
    <AppBar position="static" sx={{
      [theme.breakpoints.down('sm')]: {
        height: APP_BAR_HEIGHT_SM
      },
      [theme.breakpoints.up('sm')]: {
        height: APP_BAR_HEIGHT_MD
      }
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={drawerOpen ? toggleDrawer(false) : toggleDrawer(true)}
              color="inherit"
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {topSitePages.concat(bottomSitePages).map((page: DSPage) => renderPageEntry(page))}
          </Box>

          {
            /*    ---------------------------------- User Menu TBI Later
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
               <Menu 
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {topSitePages.concat(bottomSitePages).map((page: DSPage) => (
                  <MenuItem key={page.title} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu> 
            </Box>
            */
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}