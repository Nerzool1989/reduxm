export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DISABLE = 'DISABLE';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';

export const incrementAction = () => ({type: INCREMENT})

export const decrementAction = () => ({type: DECREMENT})

export const disableAction = (disabled) => ({type: DISABLE, disabled: disabled})

export const asyncIncrementAction = () => (dispath) => {
    dispath(disableAction(true));
    setTimeout(
        ()=>{
            dispath({type: ASYNC_INCREMENT})
            dispath(disableAction(false))
        },
        3000
    )
}

const initialState = {
    counter: 0,
    action: '',
    disabled: false
}

const topReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
                action: "Увеличили"
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
                action: "Уменьшили"
            }
        case ASYNC_INCREMENT:
            return {
                ...state,
                counter: state.counter + 2,
                action: 'Асинхронно'
            }
        case DISABLE: 
            return {
                ...state,
                disabled: action.disabled
            }
        default:
            return state
    }
   
}

export default topReducer;