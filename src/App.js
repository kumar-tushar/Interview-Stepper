import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Registration from "./cards/Registration";
import PhoneInterview from "./cards/PhoneInterview";
import CodingTest from "./cards/CodingTest";
import TechnicalInterview from "./cards/TechnicalInterview";
import HrInterview from "./cards/HrInterview";
import Hired from "./cards/Hired";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin:'auto',
    marginTop: '90px'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))

function getSteps() {
  return ['Registration', 'Phone Interview', 'Coding Test', 'Technical Interview', "HR Interview", "Hired"]
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Registration />;
    case 1:
      return <PhoneInterview/>;
    case 2:
      return <CodingTest/>;
    case 3:
      return <TechnicalInterview/>;
    case 4:
      return <HrInterview/>;
    case 5:
      return <Hired/>;
    default:
      return 'Unknown stepIndex'
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes= useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
          ))}
        </Stepper>

        <div>
          {activeStep === steps.length ? (
              <div>
                <Grid container justifyContent="center">
                  <Typography className={classes.instructions}>All steps completed.</Typography>
                  <Button onClick={handleReset} style={{color: "blue"}}>Reset</Button>
                </Grid>
              </div>) :
              (<div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Grid container justifyContent="center">
                    <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </Grid>
                </div>
              </div>)
          }
        </div>
      </div>
  )
}



