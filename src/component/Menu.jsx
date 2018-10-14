import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  return {
    drawerPaper: {
      position: 'relative'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar
    }
  };
};

function Menu(props) {
  const { classes, open } = props;
  return (
    <Drawer
      variant="persistent"
      open={open}
      style={{ width: 240 }}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <MenuList>
        <MenuItem>Recent</MenuItem>
        <MenuItem>User</MenuItem>
        <MenuItem>Chart</MenuItem>
      </MenuList>
    </Drawer>
  );
}

export default withStyles(styles, { withTheme: true })(Menu);
