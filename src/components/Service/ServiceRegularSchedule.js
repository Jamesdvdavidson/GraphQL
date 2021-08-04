import React from "react";
import {CardContent, Typography} from "@material-ui/core";

const ServiceRegularSchedule = (props) => {
    const data = props.data;
    let regularSchedules = [];

    console.log(data.service_at_locations);

    if (data.hasOwnProperty("service_at_locations") && data.service_at_locations.length !== 0) {
        for (let service_at_location of data.service_at_locations) {
            if (service_at_location.hasOwnProperty("regular_schedule") && service_at_location.regular_schedule.length !== 0) {
                for (let row of service_at_location.regular_schedule) {
                    if (row.hasOwnProperty("description") && row.description !== "") {
                        regularSchedules.push(row.description);
                    }
                }
            }
        }
    }


    return (
        regularSchedules.length !== 0 ?
            <CardContent>
                <Typography variant={"h4"}>
                    Times
                </Typography>
                {regularSchedules.map((row, index) => (
                    <Typography key={index} variant={"body2"}>{row}</Typography>
                ))}
            </CardContent>

            : null
    );
};


export default ServiceRegularSchedule;
