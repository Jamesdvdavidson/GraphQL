import {Circle, LayerGroup, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import React, {useState} from "react";
import {flatten, pull} from 'lodash';
import {LatLng} from "leaflet";
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import isValid from "uk-postcode-validator";

const OpenStreetMapServices = (props) => {
    const data = props.data;
    const postcode = props.postcode;
    const proximity = props.proximity;

    const [mapCentre, setMapCentre] = useState(postcode !== "" && isValid(postcode) ? null : new LatLng(51.454649, -2.587954));

    const [isLoaded, setIsLoaded] = useState(postcode !== "" && isValid(postcode) ? 0 : 1);


    if (isLoaded === 0 && mapCentre === null) {

        fetch(`https://api.postcodes.io/postcodes/${postcode}`, {cache: "force-cache"}).then(
            res => res.json()
                .then(resData => {
                    console.log(resData);
                    setMapCentre(new LatLng(parseFloat(resData.result.latitude), parseFloat(resData.result.longitude)));
                    setIsLoaded(1);
                })
        );
    }
    let pos = data.map((service) => {
        if (service.hasOwnProperty("service_at_locations") && service.service_at_locations.length !== 0) {
            return service.service_at_locations.map((service_at_location) => {
                if (service_at_location.hasOwnProperty("location") && service_at_location.location.latitude !== null && service_at_location.location.longitude !== null) {
                    return {
                        id: service.id,
                        name: service.name,
                        lat: service_at_location.location.latitude,
                        long: service_at_location.location.longitude
                    };
                }
                return null;
            });
        }
        return null;
    });
    pull(pos, null);
    pull(pos, undefined);
    const positions = flatten(pos);
    const markers = positions.map((loc, i) => (
        <Marker key={i} position={new LatLng(loc.lat, loc.long)}>
            <Popup>
                <Link to={`/services/${loc.id}`}>
                    <Typography variant={"body2"}>
                        {loc.name}
                    </Typography>
                </Link>
            </Popup>
        </Marker>
    ));
    return (
        isLoaded ?
            <MapContainer center={mapCentre} zoom={11} scrollWheelZoom={true} style={{height: 300}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers}
                {proximity ?
                    <LayerGroup>
                        <Circle center={mapCentre} pathOptions={{fillColor: 'blue'}} radius={proximity * 1000}/>
                    </LayerGroup>
                    : null}

            </MapContainer> : null
    );
};


export default OpenStreetMapServices;
