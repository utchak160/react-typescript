import React from "react";

import {UserItem} from "../UserItem/UserItem";
import Card from "../../../Shared/Card/Card";
import {User} from "../../../../models/user";
import './UserList.css';

export const UserList = (props: any) => {
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
