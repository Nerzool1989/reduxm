import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import Text from '../components/Text';
import { decrementAction, incrementAction, asyncIncrementAction} from '../redux/topReducer';


const PanelTop = (props) => {
    return (
        <>
            <h3>Счетчик <Text border>{props.counter}</Text></h3>
            <Button color='primary' disabled={props.disabled} onClick={()=>{props.increment()}}>
                INCREMENT
            </Button>
            <Button color='secondary' disabled={props.disabled}  onClick={()=>{props.decrement()}}>
                DECREMENT
            </Button>
            <Button styleCustom disabled={props.disabled} onClick={()=>{props.asyncIncrement()}}>
                ASYNC INCREMENT
            </Button>
            <h3>{props.action}</h3>
        </>
    )
}

const mapStateToProps = (state) => {
    return state.top
}


const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementAction()),
        decrement: () => dispatch(decrementAction()),
        asyncIncrement: () => dispatch(asyncIncrementAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelTop);