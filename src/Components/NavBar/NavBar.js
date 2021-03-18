import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
 
function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  const goToPage = (dest) => {
    history.push(dest)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <Typography variant="h6" className={classes.title} onClick={() => goToPage("")}>
              Sangwoo Kim
            </Typography>
          </Box>
          <Button color="inherit" onClick={() => goToPage("/projects")}>Projects</Button>
          <Button color="inherit" onClick={() => goToPage("/about")}>About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
 
export default NavBar;