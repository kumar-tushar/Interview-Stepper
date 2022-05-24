import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" style={{ justifyContent: "center", display: "flex" }}>
          Technical Interview
        </Typography>
        <br />
        <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
          Interviewer: Mr. David
        </Typography>
        <hr style={{ width: "50%" }} />
        <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
          Panel: 1
        </Typography>
        <hr style={{ width: "50%" }} />
        <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
          Time: 30 Aug 2022, 10:00 am
        </Typography>
      </CardContent>
    </React.Fragment>
)

export default function TechnicalInterview() {
  return (
    <Box sx={{ width: "30%" }}>
      <Card variant="outlined" style={{ height: "auto" }}>{card}</Card>
    </Box>
  )
}
