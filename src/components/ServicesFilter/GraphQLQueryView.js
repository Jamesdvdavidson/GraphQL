import React from "react";
import {Typography} from "@material-ui/core";

const GraphQLQueryView = (props) => {
    const where = props.where;
    const outWhere = {
        "where": where,
        "per_page": 300,
        "page": 1
    };
    const query =
        `query services ($page: Int, $per_page: Int, $where: Object) {
            services (page: $page, per_page: $per_page, where: $where) {
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
    return (
        <React.Fragment>
            <Typography variant={"h6"}>
                GraphQL Query
            </Typography>
            <Typography variant={"body2"} style={{whiteSpace: "break-spaces"}}>
                {query}
            </Typography>
            <Typography variant={"h6"}>
                Arguments
            </Typography>
            <Typography variant={"body2"} style={{whiteSpace: "break-spaces"}}>
                {JSON.stringify(outWhere, null, "\t")}
            </Typography>
        </React.Fragment>
    );
};

export default GraphQLQueryView;
