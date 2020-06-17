import React from "react";

import PlaceList from "../../components/PlaceList/PlaceList";

const Places: React.FC = () => {
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Ladakh',
            imageUrl: 'https://s01.sgp1.digitaloceanspaces.com/large/872942-85128-uhdkltzdjy-1521719156.jpg',
            description: 'Next trip destination',
            creator: 'u1',
            address: 'Raku Complex, Fort Road, Leh, Jammu and Kashmir 194101',
            coordinates: {
                latitude: 34.163706,
                longitude: 77.5795723
            }
        }
    ];
    return (
        <PlaceList items={DUMMY_PLACES}/>
    )
};

export default Places;
