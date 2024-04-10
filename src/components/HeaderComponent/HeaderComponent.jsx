import React from "react";
import Grid from "@mui/material/Grid";

const HeaderComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div>xs=8</div>
      </Grid>
      <Grid item xs={4}>
        <div>xs=4</div>
      </Grid>
      <Grid item xs={4}>
        <div>xs=4</div>
      </Grid>
    </Grid>
  );
};
export default HeaderComponent;
