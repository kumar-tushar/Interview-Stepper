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
import CodingInterview from "./cards/CodingInterview";
import HrInterview from "./cards/HrInterview";
import Hired from "./cards/Hired";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Registration', 'Phone Interview', 'Coding Test', 'Coding Interview', "HR Interview", "Hired"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Registration/>;
    case 1:
      return <PhoneInterview/>;
    case 2:
      return <CodingTest/>;
    case 3:
      return <CodingInterview/>;
    case 4:
      return <HrInterview/>;
    case 5:
      return <Hired/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
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
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
          )}
        </div>
      </div>
  );
}



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '80%',
//     marginTop: theme.spacing(6),
//     margin:"auto",
//
//   },
//   backButton: {
//     marginLeft:theme.spacing(60),
//     marginRight: theme.spacing(2),
//   },
//   instructions: {
//     marginTop: theme.spacing(10),
//     marginLeft:theme.spacing(40),
//     marginRight: theme.spacing(40),
//     marginBottom: theme.spacing(20),
//     border:"solid 78px",
//   },
// }));
//
//
// function getSteps() {
//   return ['Registration', 'Phone Interview', 'Coding Test', 'Coding Interview', "HR Interview", "Hired"];
// }
//
// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return 'Select campaign settings...';
//     case 1:
//       return 'What is an ad group anyways?';
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown stepIndex';
//   }
// }
//
//
// export default function HorizontalLabelPositionBelowStepper() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();
//
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };
//
//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
//
//   const handleReset = () => {
//     setActiveStep(0);
//   };
//
//   return (
//       <div className={classes.root}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//           ))}
//         </Stepper>
//         <div>
//
//
//           {activeStep === steps.length ? (
//               <div>
//                 <Typography className={classes.instructions}>All steps completed</Typography>
//                 <Button onClick={handleReset}>Reset</Button>
//               </div>
//           ) : (
//               <div>
//                 <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//                 <div>
//                   <Button
//                       disabled={activeStep === 0}
//                       onClick={handleBack}
//                       className={classes.backButton}
//                   >
//                     Back
//                   </Button>
//                   <Button variant="contained" color="primary" onClick={handleNext}>
//                     {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                   </Button>
//                 </div>
//               </div>
//           )
//           }
//
//         </div>
//       </div>
//   )
// }

