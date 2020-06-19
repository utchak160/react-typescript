import React, {Fragment} from "react";
import {useParams} from 'react-router-dom';
import {Place} from "../../../../models/place";
import Card from "../../../Shared/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import {FieldAttributes, Form, Formik, useField} from "formik";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import {Helmet} from "react-helmet";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

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

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const MyInputField: React.FC<FieldAttributes<{}>> = ({placeholder, type, ...props}) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <Fragment>
            <Input placeholder={placeholder} {...field} type={type} error={!!errorText} className={'field my-2'}/>
            {errorText !== '' && <p>{errorText}</p>}
        </Fragment>
    )
};

const MyTextField: React.FC<FieldAttributes<{}>> = ({placeholder, type, ...props}) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <Fragment>
            <TextField placeholder={placeholder} {...field} multiline rowsMax={4} type={type} error={!!errorText} className={'field my-2'}/>
            {errorText !== '' && <p>{errorText}</p>}
        </Fragment>
    )
};

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().min(3, 'Description must have at least 3 characters').required('Description is required'),
    address: Yup.string().required('Address is required'),
});

const UpdatePlace = () => {
    const classes = useStyles();
    const {placeId} = useParams();
    const place = DUMMY_PLACES.find(p => p.id === placeId);

    if (!place) {
        return (
            <Card>
                <div className="text-center">
                    No Place found!
                </div>
            </Card>
        );
    }
    return (
        <div className="container-fluid">
            <Helmet>
                <title>Share Places</title>
            </Helmet>
            <div className="place-form">
                <Formik
                    validateOnChange={true}
                    validationSchema={validationSchema}
                    initialValues={{title: place.title, description: place.description, address: place.address}}
                    onSubmit={(data, {setSubmitting}) => {
                        setSubmitting(true);
                        setSubmitting(false);
                    }}>
                    <Form>
                        <MyInputField name="title" placeholder="Title" type="text"/>
                        <MyTextField name="description" placeholder="Description" type="text"/>
                        <MyInputField name="address" placeholder="Address" type="text"/>
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                            >
                                Update Place
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default UpdatePlace;
