import {CardContent, Typography} from "@material-ui/core";
import React from "react";

const ServiceEligibility = (props) => {
    let data = props.data;
    return (
        data.hasOwnProperty("eligibilitys") && data.eligibilitys.length !== 0 &&
        <CardContent key={"eligibilitys"}>
            <Typography variant={"h4"}>
                Eligibility
            </Typography>
            {data.eligibilitys.map((row, index) => (
                <React.Fragment key={index}>
                    {row.hasOwnProperty("minimum_age") && row.minimum_age !== null &&
                    <Typography key={`min${index}`} variant={"body2"}>
                        Minimum age: {row.minimum_age}
                    </Typography>}
                    {row.hasOwnProperty("maximum_age") && row.maximum_age !== null &&
                    <Typography key={`max${index}`} variant={"body2"}>
                        Maximum age: {row.maximum_age}
                    </Typography>}
                </React.Fragment>
            ))}
        </CardContent>

    );
};

export default ServiceEligibility;
