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
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import TheHallListContainer from "../../Containers/TheHallListContainer.js"
import AdminFoodContainer from "../../Containers/AdminFoodContainer.js"
import ReservationContainer from "../../Containers/ReservationContainer.js"
import LoginContainer from '../../Containers/LoginContainer';
import Paper from '@material-ui/core/Paper';
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
            currentMenu: 'Halls'
        };
        this.sideList = (
            <div style={{width:'250px'}}>

                <Divider />

                <List>

                    <ListItem button onClick={this.changeMenu.bind(this,'Halls')}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Halls"/>
                    </ListItem>

                    <ListItem button onClick={this.changeMenu.bind(this,'Foods')}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Food"/>
                    </ListItem>

                    <ListItem button onClick={this.changeMenu.bind(this,'Reservations')}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Reservations"/>
                    </ListItem>

                </List>


            </div>
        );

    }

    changeMenu(name) {
        this.setState({
            currentMenu: name
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

                {
                    (this.props.loginReducer.loginStatus === true ) &&
                    < AppBar menuName={this.state.currentMenu} toggleDrawer={this.toggleDrawer.bind(this)} logout={this.props.logout.bind(this)}
                             position="fixed" fullWidth/>
                }

                {
                    (this.props.loginReducer.loginStatus === false) &&

                    <LoginContainer />
                }
                {
                    (this.props.loginReducer.loginStatus === false && this.props.loginReducer.checkDetail === true) &&
                    <Grid container justify="center" spacing={24} style={{padding:24, margin:0, width:"100%"}}>

                        <Grid item xs={4}>
                            <Paper style={{padding:24, margin:0, width:"100%"}}>
                                <Typography align="center" variant="h4" gutterBottom> Check Login
                                    details..!!!</Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                }

                {
                    (this.props.loginReducer.loginStatus === true ) &&
                    <div>
                        {
                            this.state.currentMenu === 'Halls' &&
                            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                                <TheHallListContainer />
                            </Grid>
                        }

                        {
                            this.state.currentMenu === 'Foods' &&
                            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                                <AdminFoodContainer />
                            </Grid>
                        }

                        {
                            this.state.currentMenu === 'Reservations' &&
                            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                                <ReservationContainer />
                            </Grid>
                        }
                    </div>
                }

            </div>

        )
    }
}

AdminPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminPage);