import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import {
  StepButton,
  StepLabel,
  Stepper,
  Step,
  IconButton,
  AppBar
} from "@material-ui/core";

import Check from "@material-ui/icons/Check";
import HouseIcon from "@material-ui/icons/House";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import LeaseIcon from "@material-ui/icons/NoteAdd";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import BackIcon from "@material-ui/icons/NoteAdd";
// import NextIcon from "@material-ui/icons/NoteAdd";
import ParentHouseIcon from "@material-ui/icons/Apartment";
import StepConnector from "@material-ui/core/StepConnector";
import { Container } from "../../../styledComponents";
import CreateHouse from "./CreateHouse";
import AddHouseImage from "./AddHouseImage";
import LeaseInfo from "./LeaseInfo";
import CreateParentHouse from "./CreateParentHouse";

const styles = theme => ({
  list: {
    width: 800
  },
  root: {
    width: "100%"
  },
  button: {
    margin: theme.spacing(1),
    padding: 0
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
});

const CustomStepConnector = withStyles({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const useCustomStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
});

function CustomStepIcon(props) {
  const classes = useCustomStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <HouseIcon />,
    2: <ParentHouseIcon />,
    3: <LeaseIcon />,
    4: <AddPhotoIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

class Index extends React.Component {
  state = {
    activeStep: 0,
    completed: {}
  };

  totalSteps = () => {
    const steps = this.getSteps();
    return steps.length;
  };

  completedSteps = () => {
    return Object.keys(this.state.completed).length;
  };

  isLastStep = () => {
    return this.state.activeStep === this.totalSteps() - 1;
  };

  allStepsCompleted = () => {
    return this.completedSteps() === this.totalSteps();
  };

  handleNext = () => {
    const steps = this.getSteps();
    const newActiveStep =
      this.isLastStep() && !this.allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in this.state.completed))
        : this.state.activeStep + 1;
    this.setState({ activeStep: newActiveStep });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  handleStep = step => () => {
    this.setState({ activeStep: step });
  };

  handleComplete = () => {
    const newCompleted = this.state.completed;
    newCompleted[this.state.activeStep] = true;
    this.setState({ completed: newCompleted });
    this.handleNext();
  };

  handleReset = () => {
    this.setState({ activeStep: 0, completed: {} });
  };

  getSteps = () => {
    return [" CREATE HOUSE", "BUILDINGS", "LEASE INFORMATION", "PHOTOS"];
  };
  getStepContent = step => {
    switch (step) {
      case 0:
        return <CreateHouse onComplete={this.handleComplete} />;
      // return "rene la";
      case 1:
        return <CreateParentHouse />;
      case 2:
        return <LeaseInfo />;
      case 3:
        return <AddHouseImage />;

      default:
        return;
    }
  };
  render() {
    const { activeStep, completed } = this.state;
    const { classes, onClose } = this.props;
    const steps = this.getSteps();

    return (
      <Container
        flex={1}
        customStyles={{ width: 480, height: "100vh", position: "relative" }}
      >
        <AppBar
          elevation={0}
          position="sticky"
          style={{ position: "sticky", backgroundColor: "transparent" }}
        >
          <Stepper
            style={{ height: 64 }}
            nonLinear
            activeStep={activeStep}
            connector={<CustomStepConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  onClick={this.handleStep(index)}
                  completed={completed[index]}
                >
                  <StepLabel StepIconComponent={CustomStepIcon}>
                    {label}
                  </StepLabel>
                </StepButton>
              </Step>
            ))}

            <StepLabel
              onClick={onClose}
              icon={
                <p
                  style={{
                    fontSize: 30,
                    fontWeight: 200,
                    marginLeft: 15,
                    color: "inherit",
                    cursor: "pointer"
                  }}
                >
                  &times;
                </p>
              }
            ></StepLabel>
          </Stepper>
        </AppBar>
        <Container flex={1}>{this.getStepContent(activeStep)}</Container>
      </Container>
    );
  }
}

export default withStyles(styles)(Index);
