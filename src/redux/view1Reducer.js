const initialState = {
    counter: 0,
    action: '',
    disable: false
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DISABLE = 'DISABLE';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';

export const incrementAction = () => ({type: INCREMENT})

export const decrementAction = () => ({type: DECREMENT})

export const disableAction = (disable) => ({type: DISABLE, disable: disable})

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


const view1Reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            console.log(state)
            return {
                ...state, //Общий ?? проверить
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
                disable: action.disable
            }
        default:
            return state
    }
   
}

export default view1Reducer;