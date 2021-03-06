import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField"
import TheReservationCard from "./TheReservationCard.js";
import Button from "@material-ui/core/Button"
import AddIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TheHallFormContainer from '../../Containers/TheHallFormContainer.js'
import ViewReservationContainer from "./../../Containers/ViewReservationContainer.js"

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ReservationList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchString: "",
            newHallopen: false,
            currentHallId: "",
            hallViewMode: false,
            currentRes:{
                customer:{},
                banquetHall:{},
                foodOrders:{}
            }
        }
    }


    componentDidMount() {
        this.props.fetchAllReservations();
    }

    onSearchInputChange(ev) {
        if (ev.target.value) {
            this.setState({
                searchString: ev.target.value
            })
        }
        else {
            this.setState({
                searchString: ""
            })
        }
    }


    addNewHall() {
        this.setState({
            currentHallId: '',
            hallViewMode: false
        })

        this.handleClickAddNewHallOpen()
    }

    handleClickAddNewHallOpen = () => {

        this.setState({newHallopen: true});
    };

    handleClickAddNewHallClose = () => {
        this.setState({newHallopen: false});
    };

    viewHall(res) {
        this.setState({
            currentHallId: res.id,
            hallViewMode: true,
            currentRes:res
        })

        this.handleClickAddNewHallOpen();

        console.log(res.id)
    }


    render() {
        let {classes} = this.props;
        return (
            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>

                {
                    this.props.reservationReducer.reservations ? (

                        <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                            {
                                this.props.reservationReducer.reservations.map((hall, index)=> {
                                    return <Grid item key={index} xs={6} sm={4} lg={3} xl={2}>
                                        <TheReservationCard viewHall={this.viewHall.bind(this)} reservation={hall}/>
                                    </Grid>


                                })
                            }
                        </Grid>

                    ) : "NO Reservations Found..........!!!!!!!!!"
                }


                <Dialog
                    fullScreen
                    open={this.state.newHallopen}
                    onClose={this.handleClickAddNewHallClose}
                    // TransitionComponent={Transition}
                >

                    <AppBar position="relative" className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClickAddNewHallClose}
                                        aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                    <ViewReservationContainer closeDialog={this.handleClickAddNewHallClose.bind(this)} id={this.state.currentHallId} reservation={this.state.currentRes} />
                    </Grid>
                    </Dialog>
                {/**
                <Button variant="fab" onClick={this.addNewHall.bind(this)} className={classes.fab}
                        color="primary">
                    <AddIcon />
                </Button>
             

                 <Dialog
                 // fullScreen
                 open={this.state.newHallopen}
                 onClose={this.handleClickAddNewHallClose}
                 // TransitionComponent={Transition}
                 >
                 

                  <AppBar position="relative" className={classes.appBar}>
                  <Toolbar>
                  <IconButton color="inherit" onClick={this.handleClickAddNewHallClose}
                  aria-label="Close">
                  <CloseIcon />
                  </IconButton>
                  </Toolbar>
                  </AppBar><Grid container style={{padding:5, margin:0, width:"100%"}}>
                  <Grid item xs={12} style={{padding:24, margin:0, width:"100%"}}>
                 

                    <TheHallFormContainer hallId={this.state.currentHallId} viewMode={this.state.hallViewMode}
                    closeDialog={this.handleClickAddNewHallClose.bind(this)}/>
               
                 </Grid>
                 </Grid>
                 
                    </Dialog>
                 **/}
               
            </Grid>
        )

    }


}
ReservationList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReservationList);