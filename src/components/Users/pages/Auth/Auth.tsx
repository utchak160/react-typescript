import React, {Fragment, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FieldAttributes, Form, Formik, useField} from "formik";
import Input from "@material-ui/core/Input";
import * as Yup from "yup";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


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

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Enter a valid email!').required('Email is required'),
    password: Yup.string().min(8, 'Password must of 8 letter')
})

const Auth = (props: any) => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const switchModeHandler = () => {
        setIsLoginMode(prevState => !prevState)
    };

    const classes = useStyles();
    return (
        <Card>
            <CardHeader
                title="Authentication Form"
                subheader="Fill the details below"
                />
                <CardContent>
                    <div className="place-form">
                        <Formik
                            validateOnChange={true}
                            validationSchema={validationSchema}
                            initialValues={{email: '', password: '', name: ''}}
                            onSubmit={(data, {setSubmitting}) => {
                                setSubmitting(true);
                                console.log('[Auth]', data);
                                setSubmitting(false);
                            }}>
                            <Form>
                                {!isLoginMode && <MyInputField name="name" placeholder="Name" type="text"/>}
                                <MyInputField name="email" placeholder="Email" type="text"/>
                                <MyInputField name="password" placeholder="Password" type="password"/>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        className={classes.button}
                                        endIcon={isLoginMode ? <TelegramIcon/> : <PersonAddIcon/> }
                                    >
                                        {isLoginMode ? 'Login' : 'Register'}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={switchModeHandler}
                                        className={classes.button}
                                        endIcon={<ExitToAppIcon/>}
                                    >
                                        {isLoginMode ? 'Register ' : 'Login '}here
                                    </Button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </CardContent>
        </Card>
    )
};

export default Auth;
