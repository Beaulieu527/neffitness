import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
}));



const Navbar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))} */}
                <ListItem>
                    <Button color="default" component={RouterLink} to="/about">
                        About
                    </Button>
                </ListItem>
                <ListItem>
                    <Button color="default" component={RouterLink} to="/fitness-classes">
                        Classes
                    </Button>
                </ListItem>
                <ListItem>
                    <Button color="default" component={RouterLink} to="/train">
                        Training
                    </Button>
                </ListItem>
                <ListItem>
                    <Button color="default" component={RouterLink} to="/contact">
                        Contact
                    </Button>
                </ListItem>
            </List>
            <Divider />
        </div>
    );


    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Button color="default" component={RouterLink} to="/">
                        Home
                    </Button>
                    <Typography variant="h6" className={classes.title}>
                        Gym Logo
                    </Typography>
                    {/* <Button color="default" component={RouterLink} to="/contact">
                        Classes
                    </Button>
                    <Button color="default" component={RouterLink} to="/contact">
                       Training
                    </Button>
                    <Button color="default" component={RouterLink} to="/contact">
                        Contact
                    </Button> */}
                    <IconButton onClick={toggleDrawer('right', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                    {sideList('right')}
                </Drawer>
            </AppBar>
        </div>
    );
}

export default Navbar;