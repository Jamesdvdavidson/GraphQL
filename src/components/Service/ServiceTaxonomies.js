import {Grid, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {LocalOfferOutlined} from "@material-ui/icons";
import React from "react";

const ServiceTaxonomies = (props) => {
    let data = props.data;
    return (
        <List dense={true}>
            <Grid container
                  spacing={1}
                  direction="row"
                  justify="flex-start"
                  alignItems="stretch">
                {data.hasOwnProperty("service_taxonomys") && data.service_taxonomys.length !== 0
                    ? data.service_taxonomys.map((tax, index) => (
                        <Grid item xs={"auto"} sm={"auto"} md={"auto"} lg={"auto"} key={index}>
                            <ListItem>
                                <ListItemIcon style={{minWidth: 10}}>
                                    <LocalOfferOutlined/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={tax.hasOwnProperty("taxonomy") ? tax.taxonomy.name : null}
                                />
                            </ListItem>
                        </Grid>
                    ))
                    : null}
            </Grid>
        </List>
    );
};

export default ServiceTaxonomies;
