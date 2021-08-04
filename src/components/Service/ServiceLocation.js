import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import OpenStreetMap from "./OpenStreetMap";

let ServiceLocation = (props) => {
    let data = props.data;
    let map = [];
    return (
        data.hasOwnProperty("service_at_locations")
        && data.service_at_locations.length !== 0 ?
            <CardContent>
                <Typography variant={"h4"}>
                    Location
                </Typography>
                {data.service_at_locations.map((row) => {
                    if (row.location.latitude && row.location.longitude) {
                        map.push([row.location.latitude, row.location.longitude]);
                    }
                    let allAddress = [];
                    if (row.location.hasOwnProperty("physical_addresses") && row.location["physical_addresses"].length) {
                        allAddress = row.location["physical_addresses"].map((add) => {
                            let address = [];
                            address.push(add.hasOwnProperty("address_1") && add.address_1 !== ""
                                ? add.address_1 : null);
                            address.push(add.hasOwnProperty("city") && add.city !== ""
                                ? add.city : null);
                            address.push(add.hasOwnProperty("country") && add.country !== ""
                                ? add.country : null);
                            address.push(add.hasOwnProperty("state_province") && add.state_province !== ""
                                ? add.state_province : null);
                            address.push(add.hasOwnProperty("postal_code") && add.postal_code !== ""
                                ? add.postal_code : null);

                            return address;
                        });
                    }

                    return row.location.hasOwnProperty("physical_addresses") ?
                        <React.Fragment key={row.id}>
                            <Typography variant={"h5"}>
                                Address
                            </Typography>
                            <div key={"Addresses"}>
                                {allAddress.map((add) => (
                                    add.map((line, index) => (
                                        <Typography key={index} variant={"body1"}>{line}</Typography>
                                    ))
                                ))}
                            </div>
                            <div key={"map"}>

                            </div>
                        </React.Fragment>
                        : null;
                })}
                {map !== []
                    ? <OpenStreetMap loc={map[0]} name={data.name}/>
                    : null}
            </CardContent> : null);
};


export default ServiceLocation;
