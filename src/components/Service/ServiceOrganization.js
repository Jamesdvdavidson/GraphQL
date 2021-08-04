import React from "react";
import {CardContent, Typography} from "@material-ui/core";

let ServiceOrganization = (props) => {
    let data = props.data;
    return (
        <React.Fragment key={data.organization.id}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {data.organization.id}
                </Typography>
                <Typography variant={"h5"}>
                    Organization
                </Typography>
                {data.organization.name === data.organization.description ?
                    <Typography variant={"body2"}>
                        {data.organization.name}
                    </Typography>
                    :
                    <>
                        <Typography variant={"body2"}>
                            {data.organization.name}
                        </Typography>
                        <Typography variant={"body2"}>
                            {data.organization.description}
                        </Typography>
                    </>
                }
                <Typography variant={"body2"}>
                    {data.organization.email}
                </Typography>
                <Typography variant={"body2"}>
                    {data.organization.url !== "" ? <a href={data.organization.url} target={"_blank"}
                                                       rel={"noreferrer noopener"}>{data.organization.url}</a> : null}
                </Typography>

            </CardContent>
        </React.Fragment>
    );
};


export default ServiceOrganization;
