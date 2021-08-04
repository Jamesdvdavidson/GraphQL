import {CardContent, Typography} from "@material-ui/core";

const ServiceFees = (props) => {
    let data = props.data;
    return (
        data.hasOwnProperty("fees") && data.fees !== "" ?
            <CardContent>
                <Typography variant={"h4"}>
                    Fees
                </Typography>
                <Typography variant={"body2"}>
                    {data.fees}
                </Typography>
            </CardContent>
            : null
    );
};

export default ServiceFees;
