import React, {useEffect, useRef} from "react";
import {useParams} from 'react-router-dom';

import mapboxgl from 'mapbox-gl';
import './Map.css';

const Map = (props: any) => {
    const mapRef: any = useRef();
    mapboxgl.accessToken = 'pk.eyJ1IjoidXRjaGFrMTYwIiwiYSI6ImNrOW45bjEzeDAwMTAzZG5pZjNheGpxZzQifQ.2abVzy_9IHfLIRBiat1SMw';


    const { lng, lat, zoom } = props;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [lng, lat], // starting position [lng, lat]
            zoom: zoom // starting zoom
        });
        var marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map);
    }, [lng, lat, zoom])

    return (
        <div ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}
        id="map"></div>
    )
};

const MapBox: React.FC = () => {
    const { lng, lat } = useParams();
    return (
        <div>
            <Map lng={lng} lat={lat} zoom={8}/>
        </div>
    );
};

export default MapBox;
