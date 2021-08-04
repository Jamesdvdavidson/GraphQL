import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';


const OpenStreetMap = (props) => {
    const position = [props.loc[0], props.loc[1]];
    return (
        <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{height: 300}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                {props.hasOwnProperty("name") && props.name !== "" ?
                    <Popup>
                        {props.name}
                    </Popup> : null}
            </Marker>
        </MapContainer>);
};


export default OpenStreetMap;
