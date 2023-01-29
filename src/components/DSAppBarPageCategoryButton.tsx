import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { DSPage } from './../model/DSPage';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface DSAppBarPageCategoryButtonProps {
  page: DSPage,
}

export default function DSAppBarPageCategoryButton({ page, ...props }: DSAppBarPageCategoryButtonProps) {

  const theme = useTheme()

  const buttonRef = React.useRef(null);

  const [menuWidth, setMenuWidth] = React.useState<string>('');
  React.useLayoutEffect(() => {
    if (buttonRef != null && buttonRef.current != null) {
      setMenuWidth(buttonRef.current['offsetWidth'] + 'px');
    }
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        key={page.title}
        ref={buttonRef}
        sx={{
          my: 2,
          color: 'white',
          display: 'flex',
          flexGrow: 1
        }}
        onClick={handleClick}
        endIcon={!open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      >
        {page.title}
      </Button>
      <Menu
        id="slide-menu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            width: menuWidth,
            backgroundColor: theme.palette.primary.main,
            boxShadow: 'none'
          }
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ boxShadow: 'none' }}
      >
        {page.subpages.map((page: DSPage) => (
          <MenuItem
            onClick={handleClose}
            disableGutters
          >
            <Button
              key={page.title}
              sx={{
                color: 'white',
                display: 'block'
              }}
            >
              {page.title}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </div >
  );
}