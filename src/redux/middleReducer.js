import {getProductGroup, getProductList, saveProductList} from '../api/api';

export const PRODUCT_GROUP = "PRODUCT_GROUP";
export const PRODUCT_LIST = 'PRODUCT_LIST';
export const CHANGE_PRODUCTS = 'CHANGE_PRODUCTS';
export const DISABLED_BUTTON = 'DISABLED_BUTTON';
export const PRODUCTS_FIXATION = 'PRODUCTS_FIXATION';

//ОШИБКИ ЗАКРЫВАТЬ

export const setProductGroupAction = (group) => ({type: PRODUCT_GROUP, payload: group})
export const setProductListAction = (products) => ({type: PRODUCT_LIST, payload: products}) 
export const changeProductsAction = (newProduct) => ({type: CHANGE_PRODUCTS, payload: newProduct})
export const disabledButton = (status) => ({type: DISABLED_BUTTON, payload: status})
export const productsFixation = (products) => ({type: PRODUCTS_FIXATION, payload: products});

export const getProductAndGroup = () => {
    return async (dispatch) => {
        dispatch(disabledButton(true));
        const productGroupData = await getProductGroup();
        const productListData = await getProductList();
        dispatch(disabledButton(false));
        if(productListData.success && productGroupData.success){
            dispatch(setProductGroupAction(productGroupData.list))
            dispatch(setProductListAction(productListData.list))
            return {success: true}
        }
        return {success: false}
    }
}

//здесь можно на сейв менять это все в другуюб компоненту которая просто отображает и тогда ?
export const saveProductAction = (productList) => {
    return async (dispatch) => {
        dispatch(disabledButton(true));
        const saveProduct = await saveProductList(productList);
        //сюда экшены на ошибки общие и экшены на внутренний действия success
        console.log(saveProduct);
        if(saveProduct.status === 200){
            const response = await saveProduct.json();
            console.log(response);
            if(response.success){
                console.log(response);
                //если успех отображать просто в вид таблицы
                dispatch(productsFixation(response.body))
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

const initialState = {
    productGroup: [],
    productList: [],
    disabled: false,
    isSaveSuccess: false,
    productsFixation: []
}

const middleReducer = (state = initialState, action) =>{
    switch(action.type){
        case DISABLED_BUTTON: 
            return {...state, disabled: action.payload}
        case PRODUCT_GROUP:
            return {...state, productGroup: action.payload}
        case PRODUCT_LIST:
            return {...state, isSaveSuccess: false, productList: action.payload}
        case CHANGE_PRODUCTS:
            const newProductList = state.productList.map((item)=> 
                (item.id === action.payload.id) ? {...item, ...action.payload} : item)
            return {
                ...state, productList: newProductList
            }
        case PRODUCTS_FIXATION:
            return {...state, isSaveSuccess: true, productsFixation: action.payload}
        default: 
            return state;
    }
};

export default middleReducer;