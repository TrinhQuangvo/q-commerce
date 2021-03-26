import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";

import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

const AddressForm = () => {
  const [shippingCountry, setShippingCountry] = useState([]);
  const [shippingCountries, setShippingCountries] = useState("");
  const [shippingSubDivision, setShippingSubDivision] = useState([]);
  const [shippingSubDivisions, setShippingSubDivisions] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={() => onSubmit()}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="ZIP" label="ZIP / Postal Code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value="asd" fullWidth onChange="">
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
