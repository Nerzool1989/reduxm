import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const getBottomReducer = (state) => state.bottomReducer;

const PanelBottom = () => {
    const dispatch = useDispatch();
    const {statusResponse} = useSelector(getBottomReducer);

    return (
        <div>{statusResponse}</div>
    )
}

export default PanelBottom;