import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from "./AppBar";
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import TheHallListContainer from "../../Containers/TheHallListContainer.js"
import AdminFoodContainer from "../../Containers/AdminFoodContainer.js"

import LoginContainer from '../../Containers/LoginContainer'
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            currentMenu:'halls'
        };
        this.sideList = (
            <div style={{width:'250px'}}>

                <Divider />

                <List>

                    <ListItem button onClick={this.changeMenu.bind(this,'halls')}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Halls"/>
                    </ListItem>

                    <ListItem button onClick={this.changeMenu.bind(this,'foods')}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Food"/>
                    </ListItem>

                    <ListItem button>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Reservasions"/>
                </ListItem>

                </List>


            </div>
        );

    }
    
    changeMenu(name){
        this.setState({
            currentMenu:name
        })
    }

    toggleDrawer(status) {
        this.setState({
            drawerOpen: status
        })
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer.bind(this,false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer.bind(this,false)}
                        onKeyDown={this.toggleDrawer.bind(this, false)}
                    >
                        {this.sideList}
                    </div>
                </Drawer>
                <AppBar toggleDrawer={this.toggleDrawer.bind(this)} position="fixed" fullWidth/>
                
                
                <LoginContainer />
                
                {
                    this.state.currentMenu === 'halls' &&
                    <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                        <TheHallListContainer />
                    </Grid>   
                }

                {
                    this.state.currentMenu === 'foods' &&
                    <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                        <AdminFoodContainer />
                    </Grid>
                }
                
            </div>

        )
    }
}

AdminPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminPage);