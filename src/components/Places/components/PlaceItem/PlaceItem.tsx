import React from "react";

import Card from "../../../Shared/Card/Card";
import Button from "../../../Shared/FormElements/Button/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './PlaceItem.css'

const PlaceItem = (props: any) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDelete = () => {
        setOpen(false);
        console.log('Deleting...');
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const DialogBox = () => {
        return (
            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Want to delete it permanently?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you press Delete, then the data will be lost and cannot be recovered
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button inverse onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

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
                <Button danger onClick={handleClickOpen}>DELETE</Button>
                <DialogBox/>
            </div>
        </Card>
    </li>
};

export default PlaceItem;
