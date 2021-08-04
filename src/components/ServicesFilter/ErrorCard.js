import {Card, CardContent, Container, Grid, Typography} from "@material-ui/core";
import React from "react";

const ErrorCard = (props) => (
    <Container
        disableGutters={false}
        maxWidth={false}>
        <Grid container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="stretch">
            <Grid item xs={12} sm={6} md={4} lg={3} key={"Error"}>
                <Card variant={"outlined"}>
                    <CardContent>
                        <Typography variant={"body2"}>
                            {props.msg}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Container>
);

export default ErrorCard;
