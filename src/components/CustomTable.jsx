import { Grid, Divider } from '@material-ui/core';
import React from 'react';


const CustomTable = ({table = []}) => {
    return (
        <Grid item container justify='center'>
            {table.map(
                ({id, description, productGroup}) => (
                    <Grid item xs={12} key={id} container justify='center'>
                        <Grid item style={{margin: 10}}>{`Номер: ${id}`}</Grid>
                        <Divider orientation='vertical'/>
                        <Grid item style={{margin: 10}}>{`Комментарий: ${description}`}</Grid>
                        <Divider orientation='vertical'/>
                        <Grid item style={{margin: 10}}>{`Группа: ${productGroup}`}</Grid>
                    </Grid> 
                )
            )} 
        </Grid>
    )
};

export default CustomTable;