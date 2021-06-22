import {getProductGroup, getProductList, saveProductList} from '../api/api';

export const PRODUCT_GROUP = "PRODUCT_GROUP";
export const PRODUCT_LIST = 'PRODUCT_LIST';
export const CHANGE_PRODUCTS = 'CHANGE_PRODUCTS';
export const DISABLED_BUTTON = 'DISABLED_BUTTON';
export const PRODUCTS_FIXATION = 'PRODUCTS_FIXATION';

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

export const saveProductAction = (productList) => {
    return async (dispatch) => {
        dispatch(disabledButton(true));
        const {success, body} = await saveProductList(productList);
        dispatch(disabledButton(false))  
            if(success){
                dispatch(productsFixation(body))
                return {success}
            } else {
                return {success}
            }
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