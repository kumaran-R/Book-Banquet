import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class BlankComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>

            </Grid>
        )
    }
}

BlankComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlankComponent);