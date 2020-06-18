import React, {Fragment} from "react";

import * as Yup from 'yup';
import {Helmet} from 'react-helmet';
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {FieldAttributes, Formik, useField, Form} from "formik";
import './AddPlace.css'
import Icon from '@material-ui/core/Icon';
import {makeStyles} from "@material-ui/core/styles";


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

const AddPlace = (props: any) => {
    const classes = useStyles();

    return (
        <div className="container-fluid">
            <Helmet>
                <title>Share Places</title>
            </Helmet>
            <div className="place-form">
                <Formik
                    validateOnChange={true}
                    validationSchema={validationSchema}
                    initialValues={{title: '', description: '', address: ''}}
                    onSubmit={(data, {setSubmitting}) => {
                        setSubmitting(true);
                        console.log('[Data]', data);
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
                                Add Place
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
};

export default AddPlace;
