import {Checkbox, FormControlLabel} from "@material-ui/core";
import React from "react";

const ServicesFilterCheckBox = (props) => {
    let state = props.state;
    let handleChange = props.handleChange;
    let name = props.name;
    let label = props.label;
    return (
        <FormControlLabel key={name}
                          style={{marginBottom: 0}}
                          control={
                              <Checkbox
                                  checked={state[name]}
                                  onChange={handleChange}
                                  name={name}
                                  color="primary"
                              />
                          }
                          label={label}
        />);
};
export default ServicesFilterCheckBox;
