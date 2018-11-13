import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const drawerWidth = 240;

const styles = theme => {
  return {
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: 0
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: drawerWidth
    }
  };
};

function Main(props) {
  const { classes, open } = props;
  return (
    <main
      className={classNames(classes.content, {
        [classes.contentShift]: open
      })}>
      <div className={classes.drawerHeader} />
      {'Content'}
    </main>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
