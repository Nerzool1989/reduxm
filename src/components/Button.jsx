import React from 'react';
import {Button as ButtonM, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    customButton: {
        backgroundColor: 'green',
        color: 'white',
    },
    common: {
        margin: '0 40px 0 40px'
    }
    
})


function Button({ styleCustom, ...props }){
    const classes = useStyles();

    return (
        <ButtonM {...props} className={`${classes.common} ${styleCustom && classes.customButton}`} variant='contained'>
            {props.children}
        </ButtonM>
    )
}

export default Button;