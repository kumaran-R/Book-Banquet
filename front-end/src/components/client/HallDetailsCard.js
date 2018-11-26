import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import pictureHall from "./../../hall2.png";
const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class ClientHallCard extends Component {


    render() {
        const {classes} = this.props;
        let {hall}=this.props;
        return (
            <div>
                {
                    // this.props.hall.name ? (
                    <Card className={classes.card} elevation={10}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar} >
                                    R
                                </Avatar>
                            }

                            title={hall.name}
                            subheader={hall.hallType}
                        />

                        <CardMedia
                            className={classes.media}
                            image={pictureHall}
                            title="Paella dish"
                        />
                        <CardContent>

                            <Grid container style={{padding:2, margin:0, width:"100%"}}>
                                <Grid item xs={12}>
                                    <ListItem>
                                        <ListItemText primary={hall.costPerHour} secondary="Cost Per Hour"/>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>
                                    <ListItem>
                                        <ListItemText primary={hall.size} secondary="Size"/>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>
                                    <ListItem>
                                        <ListItemText primary={hall.maxTables} secondary="Max Tables"/>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={6}>
                                    <ListItem>
                                        <ListItemText primary={hall.maxChairs} secondary="Max Chairs"/>
                                    </ListItem>
                                </Grid>
                                <Grid item xs={4}>
                                    <ListItem>
                                        <ListItemText primary={hall.capacity} secondary="Capacity"/>
                                    </ListItem>
                                </Grid>

                            </Grid>

                        </CardContent>

                      
                        <Grid container justify="flex-end" style={{padding:10, margin:0, width:"100%"}}>

                            <Button variant="contained" color="primary" onClick={this.props.viewHall.bind(this)} className={classes.button}>
                                Reserve
                            </Button>
                        </Grid>


                    </Card>
                    // ) : null

                }
            </div>
        )
    }

}
ClientHallCard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ClientHallCard);