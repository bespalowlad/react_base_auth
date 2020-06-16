import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles'

import { FormInput } from '../components'
import { authenticate } from '../actions/user.actions'

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .min(4, 'Must be 4 characters or more')
                    .max(8, 'Must be 8 characters or less')
                    .required('Required')
            })}
            onSubmit={(values) => {
                console.log('submit!')
                console.log('values: ', values)

                const { username, password } = values
                dispatch(authenticate(username, password))
            }}
        >
            {formik => (
                <Form>
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h4" gutterBottom>Login</Typography>
                        <FormInput
                            label="username"
                            name="username"
                            type="text"
                            placeholder="username"
                        />
                        <FormInput
                            label="password"
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                        <Button component={Link} to="/register" color="primary">Registration</Button>
                    </Paper>
                </Form>
            )}
        </Formik>
    )
}

export default Login