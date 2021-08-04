import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        cursor: "pointer"
    },
    buttonText: {
        textTransform: "none",
        marginLeft: 3
    }

}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container
                          spacing={1}
                          direction="row"
                          justify="flex-start"
                          alignItems="stretch">
                        <Grid item xs={8} sm={8} md={8} lg={8} key={"NavBarTitle"}>
                            <Typography onClick={() => (window.location.hash = "")} variant="h6"
                                        className={classes.title} style={{float: "left"}}>
                                Open Referral UK - Services for older people
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} key={"NavBarButtons"}>
                            <div style={{float: "right"}}>
                                <Grid container
                                      spacing={0}
                                      direction="row">
                                    <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"}
                                          key={"NavBarButtonsHome"}>
                                        <Link to={"/"}>
                                            <Button variant={"contained"} className={classes.buttonText}
                                                    color="inherit" style={{float: "right"}}>Home</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"}
                                          key={"NavBarButtonsServices"}>
                                        <Link to={"/services/"}>
                                            <Button variant={"contained"} className={classes.buttonText}
                                                    color="inherit">Services</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"}
                                          key={"NavBarButtonsAbout"}>
                                        <Link to={"/about/"}>
                                            <Button variant={"contained"} className={classes.buttonText}
                                                    color="inherit">About</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
