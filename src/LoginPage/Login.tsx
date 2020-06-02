import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles'

import { FormInput } from '../components'

const Login = () => {
    const classes = useStyles()

    return (
        <Formik
            initialValues={{
                name: '',
                password: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .min(4, 'Must be 4 characters or more')
                    .max(8, 'Must be 8 characters or less')
                    .required('Required')
            })}
            onSubmit={(values) => {
                console.log('submit!')
                console.log('values: ', values)
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h4" gutterBottom>Login</Typography>
                        <FormInput
                            label="name"
                            name="name"
                            type="text"
                            placeholder="name"
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
                </form>
            )}
        </Formik>
    )
}

export default Login