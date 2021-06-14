import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../components/Button';
import {Grid, TextField} from '@material-ui/core';
import CustomTable from '../components/CustomTable';
import {
    getProductAndGroup,
    changeProductsAction,
    saveProductAction
} from '../redux/middleReducer';
import SelectCustom from '../components/SelectCustom';
import { setStatusResponse } from '../redux/bottomReducer';

//описать зачем использовать селектор и как, можно выбирать только измененный
const getMiddleReducer = (state) => state.middle;


const PanelMiddle = (props) => {
    const dispatch = useDispatch();
    const {
        productGroup, productList, disabled, isSaveSuccess, productsFixation
    } = useSelector(getMiddleReducer);


    const getProducts = async () => {
        const result = await dispatch(getProductAndGroup())
        console.log(result);
        dispatch(setStatusResponse(result));
    }

    const saveProducts = async () => {
        const result = await dispatch(saveProductAction(productList));
        console.log(result)
        //он возвращает данные и их надо обработать по своему в другом редьюсере
        
        //отсюда переносим в третий редьюсер
    }

    const handleTextAndSelect = (id) => (e) => {
        const newProduct = {id: id, [e.target.name]: e.target.value};
        dispatch(changeProductsAction(newProduct))
    }

    // может кнопку обнулить еще для общего видения концепции
    return (
        <>
            <Button color='primary' onClick={getProducts} disabled={disabled}>
                Get product list
            </Button>
            {isSaveSuccess ?
                <CustomTable table={productsFixation}/>
                :
                <Grid item>
                    {productList.map((item) => (
                        <Grid item key={item.id}>
                            <TextField 
                                id={`${item.id}`} label="Описание" variant="outlined"
                                value={item.description || ''}
                                onChange={handleTextAndSelect(item.id)}
                                name='description'
                            />
                            <SelectCustom 
                                list={productGroup} value={item.productGroup}
                                handleChange={handleTextAndSelect(item.id)}
                                name='productGroup'
                            />
                        </Grid>
                    ))}
                </Grid>
            }
            <Button color='secondary' onClick={saveProducts} disabled={disabled}>SAVE</Button>
        </>
    )
}

export default PanelMiddle;