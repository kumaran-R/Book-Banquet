import React from 'react';
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const HallCard = (props) => {
    return(
        <div>
            {
                props.name?(
                    <Card  elevation={10} >
                        <CardMedia style={{height:0,paddingTop:"56.25%"}}
                                   title={props.name}
                                   image={props.name}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {props.name}
                            </Typography>
                            <Typography  component="p">
                                Hall is good as yyou book quickly
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Go to page
                            </Button>
                        </CardActions>
                    </Card>
                ):null

            }
        </div>
    )
}
export default HallCard;