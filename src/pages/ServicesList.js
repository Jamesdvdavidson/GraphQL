import React, {useRef, useState} from 'react';
import {gql} from "@apollo/client";
import client from "../helpers/ApploClient";
import FormatServicesCard from "../helpers/FormatServices";
import {Container, Grid, Typography} from "@material-ui/core";
import ServicesFilter from "../components/ServicesFilter";
import {isEmpty} from 'lodash';
import ErrorCard from "../components/ServicesFilter/ErrorCard";
import OpenStreetMapServices from "../components/ServicesFilter/OpenStreetMap";
import GraphQLQueryView from "../components/ServicesFilter/GraphQLQueryView";

const GetServices = (gqlQuery, state) => {
    if (!((isEmpty(state.where[0])) || (state.where.hasOwnProperty("and") && state.where[0].and.hasOwnProperty("or") && state.where[0].and.or.length === 0))) {
        client
            .query({
                    query: gqlQuery,
                    variables: {
                        per_page: 100,
                        page: 1,
                        where: state.where[0]
                    }
                },
            )
            .then(result => {
                state.result[1](result.data.services.services);
                state.isLoaded[1](1);
            });
    } else {
        if (state.isLoaded[0] !== 2) {
            state.isLoaded[1](2);
        }
    }
};

const ServicesList = () => {
    const Get_Services = gql`
        query services ($page: Int, $per_page: Int, $where: Object) {
            services (page: $page, per_page: $per_page, where: $where) {
                page {
                    first
                    last
                    number
                    size
                    totalElements
                    totalPages
                }
                services {
                  id
                  name
                  description
                  service_at_locations {
                    location {
                      latitude
                      longitude
                    }
                  }
                }
            }
        }`;
    let [resultOut, setResultOut] = useState([]);
    let [isLoaded, setIsLoaded] = useState(2);
    let [where, setWhere] = useState({});
    const postcode = useRef(null);
    const proximity = useRef(null);

    GetServices(Get_Services, {
        result: [resultOut, setResultOut],
        isLoaded: [isLoaded, setIsLoaded],
        where: [where, setWhere],
    });

    return (
        <>
            <Container
                disableGutters={false}
                maxWidth={false}>
                <Typography variant={"h3"}>
                    Services
                </Typography>
                <ServicesFilter setWhere={setWhere} setIsLoaded={setIsLoaded}
                                postcode={postcode} proximity={proximity}/>
            </Container>
            <div>
                {isLoaded === 1
                    ?
                    <Container
                        disableGutters={false}
                        maxWidth={false}>
                        <Grid
                            container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="stretch">
                            <Grid item xs={12} sm={12} md={8} lg={9}>
                                <Grid container
                                      spacing={2}
                                      direction="row"
                                      justify="flex-start"
                                      alignItems="stretch"
                                >
                                    {resultOut.map(val =>
                                        (
                                            <Grid item xs={12} sm={6} md={4} lg={3} key={val.id}>
                                                <FormatServicesCard row={val}/>
                                            </Grid>
                                        )
                                    )
                                    }
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={3}>
                                <OpenStreetMapServices data={resultOut} postcode={postcode.current.value}
                                                       proximity={proximity.current.value}/>
                                <GraphQLQueryView where={where}/>
                            </Grid>

                        </Grid>
                    </Container>
                    : isLoaded === 0 ? <ErrorCard msg={"Loading"}/> : <ErrorCard msg={"Please select some tags"}/>}
            </div>
        </>
    );
};


export default ServicesList;
