export const SET_SERVER_ERROR = 'SET_SERVER_RESPONSE';
export const SET_STATUS_RESPONSE = 'SET_STATUS_RESPONSE';
//обработка ошибки сервера
//обработка успеха запроса
//обработка не успеха запроса


//ЗДЕСЬ ЭКШЕН КРИЭЙТОР РАССМОТРЕТЬ
export const setStatusResponse = (status = {}) => {
    const messageStatus = status.success ? 'Успешно получили' : 'Неудача';
    return {
        type: SET_STATUS_RESPONSE,
        payload: messageStatus
    }
}


const initialState = {
    serverError: '',
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