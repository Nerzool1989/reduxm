import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import { decrementAction, incrementAction, asyncIncrementAction} from '../redux/view1Reducer';


const View1 = (props) => {
    console.log(props);

    // может кнопку обнулить еще для общего видения концепции
    return (
        <>
            <div>Счетчик {props.counter}</div>
            <Button color='primary' onClick={()=>{props.increment()}}>
                INCREMENT
            </Button>
            <Button color='secondary' onClick={()=>{props.decrement()}}>
                DECREMENT
            </Button>
            <Button styleCustom onClick={()=>{props.asyncIncrement()}}>
                ASYNC INCREMENT
            </Button>
            <div>{props.action}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return state.view1
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementAction()),
        decrement: () => dispatch(decrementAction()),
        asyncIncrement: () => dispatch(asyncIncrementAction())
    }
}

//кстати коннект если не указывать второй аргумент сам пробросит dispatch
export default connect(mapStateToProps, mapDispatchToProps)(View1);