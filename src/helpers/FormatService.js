import {Card, Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import ServiceLocation from "../components/Service/ServiceLocation";
import ServiceInfo from "../components/Service/ServiceInfo";
import ServiceContact from "../components/Service/ServiceContact";
import ServiceOrganization from "../components/Service/ServiceOrganization";
import ServiceEligibility from "../components/Service/ServiceEligibility";
import ServiceFees from "../components/Service/ServiceFees";
import ServiceServiceAreas from "../components/Service/ServiceServiceAreas";
import ServiceRegularSchedule from "../components/Service/ServiceRegularSchedule";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: "100%"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    fullHeightCard: {
        height: "100%",
    },
    buttonText: {
        textTransform: "none"
    }
});

const FormatService = (props) => {
    const data = props.data;
    const classes = useStyles();

    return (
        <React.Fragment key={data.id}>
            <Container style={{paddingTop: 5}}>
                <Card className={classes.root} variant={"outlined"}>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="stretch">
                        <Grid item xs={12} sm={6} md={6} key={data.id}>
                            <ServiceInfo data={data}/>
                            <ServiceContact data={data}/>
                            <ServiceEligibility data={data}/>
                            <ServiceRegularSchedule data={data}/>
                            <ServiceServiceAreas data={data}/>
                            <ServiceFees data={data}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} key={"location"}>
                            <ServiceLocation data={data}/>
                        </Grid>

                    </Grid>
                </Card>
                <Card variant={"outlined"} style={{marginTop: 5}}>
                    <ServiceOrganization data={data}/>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default FormatService;
