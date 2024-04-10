import React from "react";
import Grid from "@mui/material/Grid";

const HeaderComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div>Item 1</div>
      </Grid>
      <Grid item xs={4}>
        <div>Item 2</div>
      </Grid>
      <Grid item xs={4}>
        <div>Item 3</div>
      </Grid>
    </Grid>
  );
};
export default HeaderComponent;
