import React from 'react';
import Button from '../components/Button';


const View1 = () => {
    return (
        <>
            <Button color='primary'>
                INCREMENT
            </Button>
            <Button color='secondary'>
                DECREMENT
            </Button>
            <Button styleCustom>
                ASYNC INCREMENT
            </Button>
        </>
    )
}

export default View1;