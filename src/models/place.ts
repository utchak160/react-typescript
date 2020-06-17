export interface Place {
    id: string;
    title: string;
    address: string;
    creator: string;
    imageUrl: string;
    coordinates: coordinate;
    latitude: number;
    longitude: number;
    description: string;
}

export enum coordinate {
    latitude,
    longitude
}
