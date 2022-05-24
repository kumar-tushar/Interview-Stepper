import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div" style={{ justifyContent: "center", display: "flex" }}>
                Congratulations!
            </Typography>
            <br />
            <Typography variant="body1" style={{ justifyContent: "center", display: "flex" }}>
                You are Hired!
            </Typography>
        </CardContent>
    </React.Fragment>
)

export default function Hired() {
    return (
        <Box sx={{ width: "30%" }}>
            <Card variant="outlined" style={{ height: "auto" }}>{card}</Card>
        </Box>
    );
}
;