import { Typography } from "@material-ui/core";
import React from "react";

export const Confirmation = () => (
  <React.Fragment>
    <Typography variant="h5" gutterBottom>
      Thank you for your order.
    </Typography>
    <Typography variant="subtitle1">
      Your order number is #2001539. We have emailed your order confirmation,
      and will send you an update when your order has shipped.
    </Typography>
  </React.Fragment>
);
