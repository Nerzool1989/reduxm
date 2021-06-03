import React from 'react';
import {Select, FormControl, InputLabel, MenuItem, makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    formControl: {
        minWidth: 170,
    }
})


const SelectCustom = ({list, value, handleChange, name}) => {
    const classes = useStyles();

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Продукт группа</InputLabel>
            <Select
                id="demo-simple-select-outlined-label"
                value={value}
                onChange={handleChange}
                label="Продукт группа"
                name={name}
        >
            {list.map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
        </Select>
      </FormControl>
    )
}

export default SelectCustom;