import React from "react";
import {UserList} from "../../components/UserList/UserList";
import {User} from "../../../../models/user";

export const Users: React.FC = () => {
    const USERS: User[] = [
        {id: '1', name: 'Ut', image: 'https://uploads.toptal.io/blog/image/125413/toptal-blog-image-1518523133236-d2bc894552c77f954f1e5ce48da6604d.png', places: 1},
        {id: '2', name: 'Utkarsh', image: 'https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe', places: 3}
    ];
    return (
        <UserList items={USERS} />
    );
};
