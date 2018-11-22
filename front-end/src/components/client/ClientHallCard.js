import React, {Component} from 'react';
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

class ClientHallCard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.hall.name ? (
                        <Card elevation={10}>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {this.props.hall.name}
                                </Typography>
                                <Typography component="p">
                                    {this.props.hall.id}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={this.props.viewHall.bind(this,this.props.hall.id)} variant="contained" size="small"
                                        color="primary">
                                    Go to page
                                </Button>
                            </CardActions>
                        </Card>
                    ) : null

                }
            </div>
        )
    }

}
export default ClientHallCard;