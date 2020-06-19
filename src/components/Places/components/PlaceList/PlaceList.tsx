import React from "react";
import { Link } from 'react-router-dom';

import AddAPhotoRoundedIcon from '@material-ui/icons/AddAPhotoRounded';
import PlaceItem from "../PlaceItem/PlaceItem";
import Card from "../../../Shared/Card/Card";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './PlaceList.css';
import {Place} from "../../../../models/place";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);

const PlaceList = (props: any) => {
    const classes = useStyles();
    if (props.items.length === 0) {
        return (
            <Card>
                <div className="text-center">
                    <h3>No Places found! May be Share one?</h3>
                    <Link to={`/place/new`}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<AddAPhotoRoundedIcon />}
                        >
                            Share place
                        </Button>
                    </Link>
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
