import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles'

import { FormInput } from '../components'
import { register } from '../actions/user.action'

const Register = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required('Required'),
                lastName: Yup.string()
                    .required('Required'),
                username: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .email("Invalid email address")
                    .required('Required'),
                password: Yup.string()
                    .min(4, 'Must be 4 characters or more')
                    .max(8, 'Must be 8 characters or less')
                    .required('Required')
            })}
            onSubmit={(values) => {
                console.log('submit!')
                console.log('values: ', values)

                dispatch(register(values))
            }}
        >
            {formik => (
                <Form>
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h4" gutterBottom>Registration</Typography>
                        <FormInput
                            label="first name"
                            name="firstName"
                            type="text"
                            placeholder="first name"
                        />
                        <FormInput
                            label="last name"
                            name="lastName"
                            type="text"
                            placeholder="last name"
                        />
                        <FormInput
                            label="username"
                            name="username"
                            type="text"
                            placeholder="username"
                        />
                        <FormInput
                            label="email"
                            name="email"
                            type="email"
                            placeholder="email"
                        />
                        <FormInput
                            label="password"
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <Button variant="contained" color="primary" type="submit">Registration!</Button>
                        <Button component={Link} to="/login" color="primary">Login</Button>
                    </Paper>
                </Form>
            )}
        </Formik>
    )
}

export default Register