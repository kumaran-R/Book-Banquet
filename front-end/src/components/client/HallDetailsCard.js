import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
        const { classes } = this.props;
        let {halldet}=this.props.hallReducer;
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

                            title={halldet.name}
                            subheader={halldet.hallType}
                        />

                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <Typography component="p">
                            {halldet.costPerHour}
                            {halldet.size}
                            {halldet.maxTables}
                            {halldet.maxChairs}
                            {halldet.capacity}
                        </Typography>

                        <Button color="primary" className={classes.button}>
                            Reserve
                        </Button>



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