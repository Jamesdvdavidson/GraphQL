import {CardContent, Typography} from "@material-ui/core";
import React from "react";

const ServiceContact = (props) => {
    let data = props.data;

    return (
        data.hasOwnProperty("contacts") && data.contacts.length !== 0 ?
            <CardContent>
                <Typography variant={"h4"}>
                    Contact Information
                </Typography>
                {data.contacts.length !== 0 && data.contacts.map((row, index) => (
                    <React.Fragment key={`Contact${index}`}>
                        {row.name || row.title ?
                            <Typography variant={"body2"}>
                                Name: {[row.name, row.title].join(" ")}
                            </Typography> : null}
                        {row.hasOwnProperty("phones") && row.phones.map((phone, phoneIndex) => (
                            <Typography variant={"body2"} key={`phone${phoneIndex}`}>
                                Number: {phone.number}
                            </Typography>
                        ))}
                    </React.Fragment>
                ))}
            </CardContent>
            : null
    );
};

export default ServiceContact;
