import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField"
import ClientHallCard from "./ClientHallCard.js";
import Button from "@material-ui/core/Button"
import AddIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HallReservePage from "./HallReservePage.js";
import ClientReservationContainer from "./../../Containers/ClientReservationContainer.js";
import HallDetailsCard from "./HallDetailsCard.js"

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

class HallListForClient extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchString: "",
            newHallopen: false,
            currentHallId: "",
            hallViewMode: false
        }
    }


    componentDidMount() {
        this.props.fetchAllHalls();
        this.props.fetchAllFoods();
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

    viewHall(hall) {
        this.setState({
            currentHallId: hall.id,
            hallViewMode: true,
            selectedHall:hall
        })

        this.handleClickAddNewHallOpen();

        
    }


    render() {
        let {classes} = this.props;
        return (
            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>

                {
                    this.props.hallReducer.halls ? (

                        <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                            {
                                this.props.hallReducer.halls.map((hall, index)=> {
                                    return <Grid item key={index} xs={6} sm={4} lg={3} xl={2}>
                                        <HallDetailsCard viewHall={this.viewHall.bind(this)} hall={hall}/>
                                    </Grid>


                                })
                            }
                        </Grid>

                    ) : "NO Halls Found..........!!!!!!!!!"
                }

               

                <Dialog
                    fullScreen
                    open={this.state.newHallopen}
                    onClose={this.handleClickAddNewHallClose}
                    TransitionComponent={Transition}
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
                    <ClientReservationContainer hall={this.state.selectedHall} />
                     </Grid>
                     </Grid>
                    
                </Dialog>
            </Grid>
        )

    }


}
HallListForClient.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HallListForClient);