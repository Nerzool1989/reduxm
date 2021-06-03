import React from 'react';
import {connect} from 'react-redux';
import Button from '../components/Button';
import { decrementAction, incrementAction, asyncIncrementAction} from '../redux/topReducer';


const PanelTop = (props) => {
    // может кнопку обнулить еще для общего видения концепции
    console.log(props);
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
    //shallowEquals
    console.log("mapStateTOP", state)
    return state.top
}

//мне это всегда было неудобно вот такой вид, да плюс разбираться и отделять какие пропсы 
//от редакса, а какие я передал от родителя, ну такое себе

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchTOP')
    return {
        increment: () => dispatch(incrementAction()),
        decrement: () => dispatch(decrementAction()),
        asyncIncrement: () => dispatch(asyncIncrementAction())
    }
}

//кстати коннект если не указывать второй аргумент сам пробросит dispatch
export default connect(mapStateToProps, mapDispatchToProps)(PanelTop);