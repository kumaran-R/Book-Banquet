import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HallCard from "./client/HallCard.js";


const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

function HallList(props) {
    
    
    
    const {classes, halls} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={8}>

                {
                    halls.map((hall,index)=>{
                        return  <Grid key={index} item xs={6}>
                            <HallCard name={hall.name}/>
                            </Grid>
                        
                       
                    })
                }
               
            </Grid>
        </div>
    );
}

HallList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HallList);
