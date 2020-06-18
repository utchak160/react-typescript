import React from "react";
import {useParams} from 'react-router-dom';

import PlaceList from "../../components/PlaceList/PlaceList";
import {Place} from "../../../../models/place";

const Places: React.FC = () => {
    const DUMMY_PLACES: Place[] = [
        {
            id: 'p1',
            title: 'Ladakh',
            imageUrl: 'https://s01.sgp1.digitaloceanspaces.com/large/872942-85128-uhdkltzdjy-1521719156.jpg',
            description: 'Next trip destination',
            creator: 'u1',
            address: 'Raku Complex, Fort Road, Leh, Jammu and Kashmir 194101',
            center: {
                lat: 34.163706,
                lng: 77.5795723
            }
        },
        {
            id: 'p2',
            title: 'Manali',
            imageUrl: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/08/Solang-Valley2.jpg',
            description: 'Best place in India',
            creator: 'u2',
            address: 'Himachal Pradesh',
            center: {
                lat: 32.2394708,
                lng: 77.1696102
            }
        }
    ];
    const {userId} = useParams();
    const loadedPlace = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={loadedPlace}/>
    );
};

export default Places;
