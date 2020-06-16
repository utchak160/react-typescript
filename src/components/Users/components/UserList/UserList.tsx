import React from "react";

import './UserList.css';

import {UserItem} from "../UserItem/UserItem";
import {User} from "../../../../models/user";

export const UserList = (props: any) => {
    if (props.items.length === 0) {
        return (
            <div className="text-center">
                <h3>No items found!</h3>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {props.items.map((user: User) => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}/>
                )
            )
            }
        </ul>
    );
};
