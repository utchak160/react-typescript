import React from "react";

import PlaceItem from "../PlaceItem/PlaceItem";
import './PlaceList.css';
import {Place} from "../../../../models/place";

const PlaceList = (props: any) => {
    return (
        <ul className="place-list">
            {props.items.map((place: Place) => (
                <PlaceItem
                key={place.id}
                id={place.id}
                image={place.imageUrl}
                title={place.title}
                description={place.description}
                address={place.address}
                creatorId={place.creator}
                coordinates={place.coordinates}
                />
            ))};
        </ul>
    );
};

export default PlaceList;
