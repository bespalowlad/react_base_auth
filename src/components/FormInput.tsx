import React from 'react'
import { useField } from 'formik'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            position: 'relative',
            marginBottom: 30,
        },

        input: {

        },

        label: {
            marginBottom: 10
        },

        error: {
            position: 'absolute',
            left: '0',
            top: 'calc(100% + 5px)',
            color: '#c50000',
        }
    }),
);

interface IProps {
    label: string
    name: string
    type: string
    placeholder: string
}

const FormInput: React.FC<IProps> = ({ label, ...props }) => {
    const classes = useStyles()
    const [field, meta] = useField(props)

    return (
        <div className={classes.root}>
            <InputLabel htmlFor={props.name} className={classes.label}>{label}</InputLabel>
            <TextField {...field} {...props} fullWidth variant="outlined" className={classes.input} />
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </div>
    )
}

export default FormInput