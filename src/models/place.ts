export interface Place {
    id: string;
    title: string;
    address: string;
    creator: string;
    imageUrl: string;
    center: {
        lng: number,
        lat: number
    };
    description: string;
}

