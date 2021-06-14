import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import { decrementAction, incrementAction, asyncIncrementAction} from '../redux/topReducer';


const PanelTop = (props) => {
    return (
        <>
            <div>Счетчик {props.counter}</div>
            <Button color='primary' disabled={props.disabled} onClick={()=>{props.increment()}}>
                INCREMENT
            </Button>
            <Button color='secondary' disabled={props.disabled}  onClick={()=>{props.decrement()}}>
                DECREMENT
            </Button>
            <Button styleCustom disabled={props.disabled} onClick={()=>{props.asyncIncrement()}}>
                ASYNC INCREMENT
            </Button>
            <div>{props.action}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("mapStateTOP", state)
    return state.top
}


const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchTOP')
    return {
        increment: () => dispatch(incrementAction()),
        decrement: () => dispatch(decrementAction()),
        asyncIncrement: () => dispatch(asyncIncrementAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelTop);