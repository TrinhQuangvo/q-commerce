import React, { useState, useEffect } from "react";
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
import { commerce } from "../../libs/commerce";

const steps = ["Shipping Addess", "Payment Detail"];

const Checkout = ({ cart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState();
  const classes = useStyles();

  const Confirmation = () => {
    return <div>Confirmation</div>;
  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {}
    };

    generateToken();
  }, [cart]);

  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );
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
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
