import React, {Component} from 'react';
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

class ClientFoodCard extends Component {

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
                                <Grid container spacing={24} justify="center" alignItems="center"
                                      style={{padding:24, margin:0, width:"100%"}}>
                                    <Grid item xs={12}>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {this.props.food.foodName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle2">
                                            Type : {this.props.food.foodType}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="subtitle2">
                                            Taste: {this.props.food.tasteType}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button onClick={this.props.addFood.bind(this,this.props.food)} variant="contained"
                                        size="small"
                                        color="primary">
                                    Add
                                </Button>
                            </CardActions>
                        </Card>
                    ) : null

                }
            </div>
        )
    }

}
export default ClientFoodCard;
