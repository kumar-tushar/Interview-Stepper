import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import {Grid} from "@material-ui/core";

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" style={{ justifyContent: "center", display: "flex" }}>
        Coding Test
        </Typography>
        <br />
        <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
        Duration: 2 hours
        </Typography>
        <hr style={{ width: "50%" }} />
        <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
        Syllabus: DSA & Algorithms
        </Typography>
        <hr style={{ width: "50%" }} />
        <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
        Languages: Java, C++, Python
        </Typography>
        <hr style={{ width: "50%" }} />
        <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
        Time: 25 Aug 2022, 10:00 am
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center", display: "flex" }}>
        <Button size="small" href="https://www.hackerrank.com/test/eifqae4ll0f" style={{ backgroundColor: "lightblue", color: "blue" }}>
          Take Test
        </Button>
      </CardActions>
    </React.Fragment>
)

export default function CodingTest() {
  return (
      <Grid container justifyContent="center">
        <Box sx={{width: "30%"}} >
          <Card variant="outlined" style={{ height: "300px" }}>{card}</Card>
        </Box>
      </Grid>
  )
}
