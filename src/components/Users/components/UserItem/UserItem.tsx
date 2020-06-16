import React from 'react';
import {Link} from "react-router-dom";

import './UserItem.css';

import Avatar from "../../../Shared/Avatar/Avatar";
import Card from "../../../Shared/Card/Card";

export const UserItem = (props: any) => {
    return (
        <Card className="user-item">
            <Link to={`${props.id}/place`}>
                <Avatar image={props.image} alt={props.name}/>
                <div>
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount > 1 ? 'places' : 'place'}</h3>
                </div>
            </Link>
        </Card>
    );
};

