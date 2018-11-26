import React, {Component} from 'react';
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
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
                                      style={{padding:2, margin:0, width:"100%"}}>
                                    <Grid item xs={12}>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {this.props.food.foodName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>

                                            <TextField
                                                variant="outlined"
                                                id="count"
                                                label="Type"
                                                value={this.props.food.foodType}
                                                InputProps={{
            readOnly: true,
          }}
                                            />
                                    </Grid>
                                    <Grid item xs={6}>
                                            <TextField
                                                variant="outlined"
                                                id="count"
                                                label="taste"
                                                value={this.props.food.tasteType}
                                                InputProps={{
            readOnly: true,
          }}

                                            />
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Grid container spacing={24} justify="flex-end" alignItems="center"
                                      style={{padding:2, margin:0, width:"100%"}}>
                                <Button onClick={this.props.addFood.bind(this,this.props.food)} variant="contained"
                                        size="small"
                                        color="primary">
                                    Add
                                </Button>
                                    </Grid>
                            </CardActions>
                        </Card>
                    ) : null

                }
            </div>
        )
    }

}
export default ClientFoodCard;
