import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Grid} from "@material-ui/core";

const card = (
    <React.Fragment>
        <CardContent style={{marginTop:"76px"}} >
            <Typography variant="h5" component="div" style={{ justifyContent: "center", display: "flex" }}>
                Register for the Job
            </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center", display: "flex" }}>
            <Button size="small" style={{ backgroundColor: "lightblue", color: "blue" }}>
                Register Now
            </Button>
        </CardActions>
    </React.Fragment>
);

export default function Registration() {
  return (
      <Grid container justifyContent="center" >
          <Box sx={{width: "30%"}} >
              <Card variant="outlined" style={{ height: "300px" }}>{card}</Card>
          </Box>
      </Grid>
  )
}
