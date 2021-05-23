const initialState = {
    counter: 0
}

export const INCREMENT = 'INCREMENT';

export const incrementAction = () => ({type: INCREMENT})

const view1Reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state, //Общий ?? проверить
                counter: state.counter++
            }
        default:
            return state
    }
   
}

export default view1Reducer;