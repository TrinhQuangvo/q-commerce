import React, { useState } from "react";
import {
  Paper,
  Stepperr,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Stepper,
} from "@material-ui/core";

import useStyles from "./styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const steps = ["Shipping Addess", "Payment Detail"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const Confirmation = () => {
    return <div>Confirmation</div>;
  };

  const Form = () => {
    return activeStep === 0 ? <AddressForm /> : <PaymentForm />;
  };
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper>
            {steps.map((step) => (
              <Step key={step.key}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
