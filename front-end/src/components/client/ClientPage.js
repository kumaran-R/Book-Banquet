import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from "./ClientAppBar";
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ClientHallListContainer from "../../Containers/ClientHallListContainer.js"
const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class ClientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          mobileNumber:'',
          email:'',
          address:'',

            drawerOpen: false
        };

        const TType = {
          name:'',
          mobileNumber:'',
          email:'',
          address:'',
          reservation:{
            banquetHall:{
              name:'',
              hallType:'',
              costPerHour:'',
              size:'',
              maxTables:'',
              maxChairs:'',
              capacity:'',
            },
            personcount:'',
            tableCount:'',
            chairCount:'',
            serviceRequest:'',
            foodRequest:'',
            foodOrders:{
              count:'',
              food:'',
            },
            customer:{
              name:'',
              mobileNumber:'',
              email:'',
              address:'',
            },
            fromDate:'',
            toDate:'',
            totalCost:'',
            downPayent:'',
          }
        };

        this.sideList = (
            <div style={{width:'250px'}}>

                <Divider />

                <List>

                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Halls"/>
                    </ListItem>

                    <ListItem button>
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
                <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                    <ClientHallListContainer />
                </Grid>
            </div>

        )
    }
}

ClientPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClientPage);
