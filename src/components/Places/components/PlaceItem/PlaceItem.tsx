import React from "react";

import Card from "../../../Shared/Card/Card";
import Button from "../../../Shared/FormElements/Button/Button";
import './PlaceItem.css'

const PlaceItem = (props: any) => {
    const {lng, lat} = props.center;
    return <li className="place-item">
        <Card className="place-item__content">
            <div className="place-item__image">
                <img src={props.image} alt={props.title}/>
            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
                <Button inverse to={`/place/map/${lng}/${lat}`}>VIEW ON MAP</Button>
                <Button to={`/place/${props.id}`}>EDIT</Button>
                <Button danger>DELETE</Button>
            </div>
        </Card>
    </li>
};

export default PlaceItem;
