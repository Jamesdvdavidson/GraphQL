import React from 'react';
import {Button, Card, CardContent, Container, Typography} from "@material-ui/core";
import Pdf from '../helpers/data/Detailed Project Proposal and initial literature review.pdf';
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <React.Fragment key={"Home"}>
            <Container maxWidth={"false"} style={{marginTop: 5}}>
                <Card variant={"outlined"}>
                    <CardContent>
                        <Typography variant={"h4"}>
                            Open Referral UK - Services for older people
                        </Typography>
                        <Typography variant={"h5"}>
                            Welcome
                        </Typography>
                        <Typography variant={"body1"}>
                            This is a demonstration tool to demonstrate the use of the GraphQL API in a client website,
                            taking advantage of GraphQL to fetch only the data need for each page.
                        </Typography>
                        <Typography variant={"h5"}>
                            Data
                        </Typography>
                        <Typography variant={"body1"}>
                            The data for the app comes from an Open Referral UK Pilot API, containing data about
                            services available in the Bristol area.
                        </Typography>
                        <Typography variant={"body1"}>
                            This data was provided by Bristol City Council a while ago to Open Referral UK,
                            this data is demonstration purposes only.
                        </Typography>
                        <Typography variant={"body1"}>
                            <a target={"_blank"} rel={"noreferrer noopener"}
                               href={"https://openreferraluk.org/"}>
                                Open Referral UK
                            </a>
                        </Typography>
                        <Typography variant={"body1"}>
                            <a target={"_blank"} rel={"noreferrer noopener"}
                               href={"https://api.porism.com/ServiceDirectoryService/swagger-ui.html"}>
                                Documentation
                            </a>
                        </Typography>
                        <Typography variant={"body1"}>
                            This site was built as a part of my final year dissertation.
                        </Typography>
                        <Typography variant={"body1"}>
                            My project proposal can be found&nbsp;
                            <a target={"_blank"} rel={"noreferrer noopener"}
                               href={Pdf}>
                                here
                            </a>.
                        </Typography>
                        <Typography variant={"h5"}>
                            Start
                        </Typography>
                        <Link to={"/services/"}>
                            <Button variant={"contained"} style={{textTransform: "none"}}>
                                Services
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Container>
        </React.Fragment>
    );
};

export default Home;
