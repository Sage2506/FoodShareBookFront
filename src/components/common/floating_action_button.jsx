import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    backgroundColor: '#007bff',
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  }
}));

export const FloatingActionButtonPlus = (props) => {
  const classes = useStyles();
    return (
    <LinkContainer to={props.link}>
      <Fab color='primary' aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </LinkContainer>
    )
  }

export default FloatingActionButtonPlus;
