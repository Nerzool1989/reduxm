//__ЗАПРОСЫ
export const getProductGroup = async () => {
    let resp = await fetch('/product/group');
    let result = await resp.json();
    return result;     
 }

 export const getProductList = async () => {
    let resp = await fetch('/available/productList');
    let result = await resp.json();
    return result;
}

export const saveProductList = async (data) => {
    let resp = await fetch(
        '/available/productList', 
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(data)
        },
    );
    return resp;
}
//__



export const PRODUCT_GROUP = "PRODUCT_GROUP";
export const PRODUCT_LIST = 'PRODUCT_LIST';
export const CHANGE_PRODUCTS = 'CHANGE_PRODUCTS';
export const DISABLED_BUTTON = 'DISABLED_BUTTON';
export const SAVE_PRODUCT = 'SABE_PRODUCT';

//ОШИБКИ ЗАКРЫВАТЬ

export const setProductGroupAction = (group) => ({type: PRODUCT_GROUP, payload: group})
export const setProductListAction = (products) => ({type: PRODUCT_LIST, payload: products}) 
export const changeProductsAction = (newProduct) => ({type: CHANGE_PRODUCTS, payload: newProduct})
export const disabledButton = (status) => ({type: DISABLED_BUTTON, payload: status})
//включение отключение лоадеров? использовать общий?
export const saveProductAction = (productList) => {
    return async (dispatch) => {
        dispatch(disabledButton(true));
        const saveProduct = await saveProductList(productList);
        //сюда экшены на ошибки общие и экшены на на внутренний действия success
        console.log(saveProduct);
        if(saveProduct.status === 200){
            const response = await saveProduct.json();
            if(response.success){
                console.log(response);
                dispatch(setProductListAction(response.body))
            } else {
                //здесь отобразить что не сохранилось
            }
        } else if(saveProduct.status !== 200){
            //здесь отобразить что вообще какие то проблемы с сервером
            //обработка ошибки в текущем разделе и снова проброс в след
        } 
        dispatch(disabledButton(false))
        return saveProduct;
        //но отсюда еще должно полететь данные дальше, чтобы передать в след редьюсер
    }
}


//отсюда при успехе надо пробрасывать в след панель
//можно там отображать ошибки и текущие статусы 

const initialState = {
    productGroup: [],
    productList: [],
    disabled: false
}

const middleReducer = (state = initialState, action) =>{
    switch(action.type){
        case DISABLED_BUTTON: 
            return {...state, disabled: action.payload}
        case PRODUCT_GROUP:
            return {...state, productGroup: action.payload}
        case PRODUCT_LIST:
            return {...state, productList: action.payload}
        case CHANGE_PRODUCTS:
            const newProductList = state.productList.map((item)=> 
                (item.id === action.payload.id) ? {...item, ...action.payload} : item)
            return {
                ...state, productList: newProductList
            }
        default: 
            return state;
    }
};

export default middleReducer;