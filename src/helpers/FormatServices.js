import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const truncateString = (str, len) => {
    if (str.length <= len) {
        return str;
    }
    return `${str.slice(0, len)}...`;
};

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: "100%"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    fullHeightCard: {
        height: "100%",
    },
    buttonText: {
        textTransform: "none"
    }
});

const FormatServicesCard = (props) => {
    let row = props.row;
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent style={{height: "auto"}}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {row.id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {row.name}
                </Typography>
                {/*<Typography className={classes.pos} color="textSecondary">*/}
                {/*    adjective*/}
                {/*</Typography>*/}
                <Typography variant="body2" component="p">
                    {truncateString(row.description, 200)}
                </Typography>
            </CardContent>
            <CardActions style={{bottom: 0}}>
                <Link to={`/services/${row.id}`}>
                    <Button className={classes.buttonText} size={"small"}>Learn more</Button>
                </Link>
            </CardActions>
        </Card>

    );
};

export default FormatServicesCard;
