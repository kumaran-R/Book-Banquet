import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import SwipeableViews from 'react-swipeable-views';
import HallDurationSelection from './HallDurationSelection.js'
import CustomerInformation from "./../CustomerInformation.js"
import AddFoodOrder from "./../AddFoodOrder.js"
const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['Select Date and Time', 'Food orders', 'Customer information'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select Date and Time';
        case 1:
            return 'Food orders';
        case 2:
            return 'Customer information';
        default:
            return 'Unknown step';
    }
}


function TabContainer({children, dir}) {
    return (
        <Grid dir={dir} style={{ padding: 1* 3 }}>
            {children}
        </Grid>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

class HallReservePage extends React.Component {
    state = {
        activeStep: 0,
        skipped: new Set(),
        reservationReq: {
            values:{
                totalCost:0
            }
        }
    };


    handleNext(key,value){
        const {activeStep} = this.state;
        let {skipped} = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            reservationReq:{
                [key]:value
            }
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };


    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };


    componentDidMount() {
        this.props.fetchAllFoods();
    }

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    render() {
        const {classes, theme,hall} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>


                <Grid container spacing={24} style={{padding:2, margin:0, width:"100%"}}>
                    <Grid item xs={12}>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            //onChangeIndex={this.handleChangeIndex}
                        >
                            <Grid item xs={12}>
                                <TabContainer dir={theme.direction}>
                                    <HallDurationSelection hall={hall} handleNext={this.handleNext.bind(this)}  />
                                </TabContainer>
                            </Grid>
                            <Grid item xs={12}>
                                <TabContainer dir={theme.direction}>
                                    <AddFoodOrder handleNext={this.handleNext.bind(this)} handleBack={this.handleBack} foods={this.props.foodReducer.foods}/>
                                </TabContainer
                                ></Grid>
                            <Grid item xs={12}>
                                <TabContainer dir={theme.direction}>
                                    <CustomerInformation handleNext={this.handleNext.bind(this)} reservationReq={this.state.reservationReq} handleBack={this.handleBack}  dir={theme.direction}/>
                                </TabContainer>
                            </Grid>
                        </SwipeableViews>
                    </Grid>
                </Grid>


            </div>
        );
    }
}

HallReservePage.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(HallReservePage);