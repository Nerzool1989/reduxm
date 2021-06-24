export const SET_STATUS_RESPONSE = 'SET_STATUS_RESPONSE';


export const setStatusResponse = (status = {}) => {
    const messageStatus = status.success ? 'Успешно получили' : 'Неудача';
    return {
        type: SET_STATUS_RESPONSE,
        payload: messageStatus
    }
}


const initialState = {
    statusResponse: '-',
};

const bottomReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_STATUS_RESPONSE:
            return {...state, statusResponse: action.payload}
        default:
            return state
    }
}

export default bottomReducer;