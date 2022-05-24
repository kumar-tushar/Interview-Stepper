import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from "@material-ui/core";

const card = (
    <React.Fragment>
        <CardContent style={{marginTop:"52px"}}>
            <Typography variant="h5" component="div" style={{ justifyContent: "center", display: "flex" }}>
                HR Interview
            </Typography>
            <br />
            <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
                Interviewer: Mrs. Nisha
            </Typography>
            <hr style={{ width: "50%" }} />
            <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
                Panel: 1
            </Typography>
            <hr style={{ width: "50%" }} />
            <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
                Time: 10 Sep 2022, 10:00 am
            </Typography>
        </CardContent>
    </React.Fragment>
)

export default function HrInterview() {
    return (
        <Grid container justifyContent="center">
            <Box sx={{width: "30%"}} >
                <Card variant="outlined" style={{ height: "300px" }}>{card}</Card>
            </Box>
        </Grid>
    )
}
