import React from "react";
import { Grid } from "@material-ui/core";

function Header() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs>
          Item
        </Grid>
        <Grid item xs={7}>
          CMT
        </Grid>
        <Grid item xs>
          Item
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
