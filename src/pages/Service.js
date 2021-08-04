import React, {useState} from 'react';
import {gql} from '@apollo/client';
import client from '../helpers/ApploClient';
import FormatService from "../helpers/FormatService";


const Service = (props) => {
        // props.match.params.id
        const Get_Service_Id = gql`
    query service($id: String!) {
        service(id: $id) {
        accreditations
        assured_date
        attending_access
        attending_type
        contacts {
            id
            name
            phones {
                id
                number
            }
            title
        }
        cost_options {
            amount
            amount_description
            id
            option
            valid_from
            valid_to
        }
        deliverable_type
        description
        eligibilitys {
            eligibility
            id
            maximum_age
            minimum_age
            taxonomys {
                id
                name
                parent {
                    id
                    name
                    parent {
                        id
                        name
                        vocabulary
                    }
                    vocabulary
                }
                vocabulary
            }
        }
        email
        fees
        id
        languages {
            id
            language
        }
        name
        organization {
            description
            email
            id
            logo
            name
            uri
            url
        }
        regular_schedules {
            byday
            bymonthday
            closes_at
            description
            dtstart
            freq
            id
            interval
            opens_at
            valid_from
            valid_to
        }
        service_areas {
            service_area
            uri
        }
        service_at_locations {
            id
            location {
                description
                id
                latitude
                longitude
                name
                physical_addresses {
                    address_1
                    city
                    country
                    id
                    postal_code
                    state_province
                }
            }
            regular_schedule {
                byday
                bymonthday
                closes_at
                description
                dtstart
                freq
                id
                interval
                opens_at
                valid_from
                valid_to
            }
        }
        service_taxonomys {
            id
            taxonomy {
                id
                name
                parent {
                    id
                    name
                    vocabulary
                }
                vocabulary
            }
        }
        status
        url
        }
    }
    `;

        let [resultOut, setResultOut] = useState({});
        let [isLoaded, setIsLoaded] = useState(0);
        client
            .query({
                    query: Get_Service_Id,
                    variables: {id: props.match.params.id}
                },
            )
            .then(result => {
                setResultOut(result.data.service);
                setIsLoaded(1);
            });

        return (
            <>
                {isLoaded ? <FormatService data={resultOut}/> : <p>Loading</p>}
            </>
        );
    }
;

export default Service;
