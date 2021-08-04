import {
    Button,
    Card,
    CardContent,
    FormControl,
    FormGroup,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    Typography
} from "@material-ui/core";
import React from "react";
import ServicesFilterCheckBox from "./ServicesFilter/Checkbox";
import serviceCheckBoxes from "../helpers/data/serviceCheckBoxes";
import {find, keys, pickBy} from 'lodash';
import {Services} from '../helpers/data/ServiceTaxonomiesForOlderPeople';
import isValid from "uk-postcode-validator";

const ServicesFilter = (props) => {
    const setWhere = props.setWhere;
    const setIsLoaded = props.setIsLoaded;
    const postcode = props.postcode;
    const proximity = props.proximity;
    let items = {};
    serviceCheckBoxes.map((item) => (
        items[`checked${item}`] = false
    ));
    let [SocialisingFilters, ServicesFilters, ActivitiesFilters, CopingFilters] = [[], [], [], []];


    const [state, setState] = React.useState(items);

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    for (let [index, item] of serviceCheckBoxes.entries()) {
        let cat = find(Services.taxonomies, {name: item}).category;

        if (cat === "Services") {
            ServicesFilters.push(<ServicesFilterCheckBox key={`${cat}${index}`} state={state}
                                                         handleChange={handleChange}
                                                         name={`checked${item}`} label={`${item}`}/>);
        }
        if (cat === "Coping") {
            CopingFilters.push(<ServicesFilterCheckBox key={`${cat}${index}`} state={state} handleChange={handleChange}
                                                       name={`checked${item}`} label={`${item}`}/>);
        }
        if (cat === "Activities") {
            ActivitiesFilters.push(<ServicesFilterCheckBox key={`${cat}${index}`} state={state}
                                                           handleChange={handleChange}
                                                           name={`checked${item}`} label={`${item}`}/>);
        }
        if (cat === "Socialising") {
            SocialisingFilters.push(<ServicesFilterCheckBox key={`${cat}${index}`} state={state}
                                                            handleChange={handleChange}
                                                            name={`checked${item}`} label={`${item}`}/>);
        }
    }

    const submitSearch = () => {

        console.log(!(isValid(postcode.current.value)));
        if (postcode.current.value !== "" && !(isValid(postcode.current.value))) {
            alert("Invalid postcode");
            return;
        }


        setIsLoaded(0);
        let taxonomies = keys(pickBy(state)).map((value => (value.substring(7))));

        if (taxonomies.length !== 0) {
            let where = {
                and: [
                    {vocabulary: "BCC Age Groups", taxonomy_id: "bccagegroup:18"},
                    {
                        or:
                            taxonomies.map((value => (
                                {
                                    vocabulary: find(Services.taxonomies, {name: value}).vocabulary,
                                    taxonomy_id: find(Services.taxonomies, {name: value}).id
                                }
                            )))

                    }
                ]
            };

            if (postcode.current.value !== "" && proximity.current.value !== "0" && proximity.current.value !== "") {
                where.and[0]["postcode"] = postcode.current.value;
                where.and[0]["proximity"] = parseInt(proximity.current.value) * 1000;
            }

            setWhere(where);
        } else {
            setWhere({});
            setIsLoaded(2);
        }
    };

    return (
        <React.Fragment key={"Filters"}>
            <FormGroup row>
                <Typography variant={"h6"}>
                    How far would you travel?
                </Typography>
            </FormGroup>
            <FormGroup row>
                <FormControl>
                    <InputLabel htmlFor="input-postal-code">Postal Code</InputLabel>
                    <Input id="input-postal-code" inputRef={postcode}
                           aria-describedby="my-helper-text" autoComplete={"off"}/>
                    <FormHelperText id="my-helper-text">e.g. BS2 0PH</FormHelperText>
                </FormControl>
                &nbsp;
                <FormControl>
                    <InputLabel htmlFor="input-proximity">Proximity</InputLabel>
                    <Input id="input-proximity" inputRef={proximity}
                           type={"number"} aria-describedby="my-helper-text" autoComplete={"off"}/>
                    <FormHelperText id="my-helper-text">Distance in Km</FormHelperText>
                </FormControl>
            </FormGroup>
            <FormGroup row>
                <Typography variant={"h6"}>
                    Which of these are you interested in?
                </Typography>
            </FormGroup>
            <FormGroup row>
                <Grid container
                      spacing={2}
                      direction="row"
                      justify="flex-start"
                      alignItems="stretch">
                    <Grid item xs={12} sm={6} md={6} lg={3} key={"ServicesFilters"}>
                        <Card variant={"outlined"} style={{height: "100%", backgroundColor: "#e9f5de"}}>
                            <CardContent>
                                <Typography variant={"h6"}>
                                    <b>Services</b>
                                </Typography>
                                {ServicesFilters}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3} key={"ActivitiesFilters"}>
                        <Card variant={"outlined"} style={{height: "100%", backgroundColor: "#def5ea"}}>
                            <CardContent>
                                <Typography variant={"h6"}>
                                    <b>Activities</b>
                                </Typography>
                                {ActivitiesFilters}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3} key={"SocialisingFilters"}>
                        <Card variant={"outlined"} style={{height: "100%", backgroundColor: "#e6def5"}}>
                            <CardContent>
                                <Typography variant={"h6"}>
                                    <b>Socialising</b>
                                </Typography>
                                {SocialisingFilters}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3} key={"CopingFilters"}>
                        <Card variant={"outlined"} style={{height: "100%", backgroundColor: "#f3efd3"}}>
                            <CardContent>
                                <Typography variant={"h6"}>
                                    <b>Situations</b>
                                </Typography>
                                {CopingFilters}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </FormGroup>
            <FormGroup row style={{marginTop: 5}}>
                <FormControl style={{marginBottom: 10}}>
                    <Button variant={"contained"} color={"primary"} onClick={submitSearch}>Submit</Button>
                </FormControl>
                <FormControl style={{marginBottom: 10, marginLeft: 5}}>
                    <Button variant={"contained"} color={"primary"} onClick={() => {
                        window.location.reload();
                    }
                    }>Clear</Button>
                </FormControl>
            </FormGroup>


        </React.Fragment>
    );
};

export default ServicesFilter;
