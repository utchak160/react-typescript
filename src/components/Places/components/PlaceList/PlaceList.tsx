import React from "react";

import PlaceItem from "../PlaceItem/PlaceItem";
import Card from "../../../Shared/Card/Card";
import './PlaceList.css';
import {Place} from "../../../../models/place";

const PlaceList = (props: any) => {
    if (props.items.length === 0) {
        return (
            <Card>
                <div className="text-center">
                    <h3>No items found!</h3>
                </div>
            </Card>
        );
    }

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
                center={place.center}
                />
            ))}
        </ul>
    );
};

export default PlaceList;
