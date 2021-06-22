import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
        container: {
            padding: 5,
            border: ({border}) =>border ? '1px solid red' : false,
        }
})

const Text = (props) => {
    const {border = ''} = props;
    const classes = useStyles({border });

    return (
        <span className={classes.container}>
            {props.children}
        </span>
    )
}

export default Text;