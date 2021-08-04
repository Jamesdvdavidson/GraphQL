import React from 'react';
import {Card, CardContent, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        BackgroundColor: "lavenderblush"
    },
    root: {
        marginTop: 5
    }
});

const About = () => {
    const classes = useStyles();
    return (
        <Container
            className={classes.root}
            disableGutters={false}
            maxWidth={false}>
            <Grid container
                  spacing={2}
                  direction="row"
                  justify="flex-start"
                  alignItems="stretch">
                <Grid item xs={12} sm={6} md={4} lg={3} key={"About"}>
                    <Card className={classes.card} variant={"outlined"}>
                        <CardContent>
                            <Typography variant={"body2"}>
                                GraphQL API Demonstration site
                            </Typography>
                            <Typography variant={"body2"}>
                                James Davidson
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};


export default About;
