import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField"
import FoodCard from "./FoodCard.js";
import Button from "@material-ui/core/Button"
import AddIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TheFoodFormContainer from '../../Containers/TheFoodFormContainer.js'


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

class FoodLists extends Component {

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

    viewFood(id) {
        this.setState({
            currentHallId: id,
            hallViewMode: true
        })

        this.handleClickAddNewHallOpen();

        console.log(id)
    }


    render() {
        let {classes} = this.props;
        return (
            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>

                {
                    this.props.foodReducer.foods ? (

                        <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                            {
                                this.props.foodReducer.foods.map((food, index)=> {
                                    return <Grid item key={index} xs={6} sm={4} lg={3} xl={2}>
                                        <FoodCard viewFood={this.viewFood.bind(this)} food={food}/>
                                    </Grid>


                                })
                            }
                        </Grid>

                    ) : "NO Foods Found..........!!!!!!!!!"
                }

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
                    {/**

                     <AppBar position="relative" className={classes.appBar}>
                     <Toolbar>
                     <IconButton color="inherit" onClick={this.handleClickAddNewHallClose}
                     aria-label="Close">
                     <CloseIcon />
                     </IconButton>
                     </Toolbar>
                     </AppBar><Grid container style={{padding:5, margin:0, width:"100%"}}>
                     <Grid item xs={12} style={{padding:24, margin:0, width:"100%"}}>
                     **/}

                    <TheFoodFormContainer hallId={this.state.currentHallId} viewMode={this.state.hallViewMode}
                                          closeDialog={this.handleClickAddNewHallClose.bind(this)}/>
                    {/**
                     </Grid>
                     </Grid>
                     **/}
                </Dialog>
            </Grid>
        )

    }


}
FoodLists.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FoodLists);
