import {CardContent, Typography} from "@material-ui/core";
import React from "react";

const ServiceServiceAreas = (props) => {
    let data = props.data;
    return (
        data.hasOwnProperty("service_areas") && data.service_areas.length !== 0 ?
            <CardContent>
                <Typography variant={"h4"}>
                    Service Areas
                </Typography>
                {data.service_areas.map((area, index) => (
                    <React.Fragment key={index}>
                        <Typography variant={"h5"}>
                            Area
                        </Typography>
                        <Typography variant={"body2"}>
                            {area.hasOwnProperty("service_area") ? area.service_area : ""}
                        </Typography>
                        {area.hasOwnProperty("uri") && area.uri !== "" ?
                            <Typography variant={"body2"}>
                                <a target={"_blank"} rel={"noreferrer noopener"} href={area.uri}>{area.uri}</a>
                            </Typography> : null}
                    </React.Fragment>
                ))}
            </CardContent>
            : null
    );
};

export default ServiceServiceAreas;
