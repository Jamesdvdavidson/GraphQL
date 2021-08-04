import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import ServiceTaxonomies from "./ServiceTaxonomies";

let ServiceInfo = (props) => {
    let data = props.data;
    return (
        <CardContent style={{height: "auto"}}>
            <Typography color="textSecondary" gutterBottom>
                {data.id}
            </Typography>
            <Typography variant="h4" component="h2">
                {data.name}
            </Typography>
            <Typography variant="body2" component="p">
                {data.description}
            </Typography>
            <ServiceTaxonomies data={data}/>
        </CardContent>
    );
};
export default ServiceInfo;
