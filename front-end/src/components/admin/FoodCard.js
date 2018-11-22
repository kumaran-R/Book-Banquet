import React, {Component} from 'react';
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

class FoodCard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.food.foodName ? (
                        <Card elevation={10}>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    {this.props.food.foodName}
                                </Typography>
                                <Typography component="p">
                                 Food Type :   {this.props.food.foodType}
                                </Typography>
                                <Typography component="p">
                                  Taste Type:  {this.props.food.tasteType}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={this.props.viewFood.bind(this,this.props.food.id)} variant="contained" size="small"
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
export default FoodCard;
