import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField"
import HallCard from "./HallCard.js";
class HallLists extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hallList: [{name: "A"}, {name: "B"}],
            searchString: ""
        }
    }


    componentDidMount() {
        this.props.fetchAllHalls();
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


    render() {
        return (
            <div>
                {
                    this.state.hallList ? (
                        <div>
                            <TextField style={{padding:24}}
                                       id="searchInput"
                                       placeholder="Search for Halls"
                                       margin="normal"
                                       onChange={this.onSearchInputChange.bind(this)}

                            />
                            <Grid container spacing={24} style={{padding:24, margin:0, width:"100%"}}>
                                {
                                    this.state.hallList.map((hall, index)=> {
                                        return <Grid item key={index} xs={12} sm={6} lg={4} xl={3}>
                                            <HallCard name={hall.name}/>
                                        </Grid>


                                    })
                                }
                            </Grid>
                        </div>
                    ) : "NO Halls Found..........!!!!!!!!!"
                }
            </div>
        )

    }


}
export default HallLists;