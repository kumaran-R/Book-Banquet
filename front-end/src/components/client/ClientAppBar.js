import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        textAlign:'center'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class ClientAppBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} onClick={this.props.toggleDrawer.bind(this,true)} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                           Banquest
                        </Typography>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}


ClientAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientAppBar);