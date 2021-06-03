import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../components/Button';
import {Grid, TextField} from '@material-ui/core';
import {
    getProductGroup, 
    getProductList, 
    setProductGroupAction,
    setProductListAction,
    changeProductsAction,
    saveProductAction
} from '../redux/middleReducer';
import SelectCustom from '../components/SelectCustom';

//описать зачем использовать селектор и как, можно выбирать только измененный
const productGroupSelector = (state) => state.middle.productGroup;
const productListSelector = (state) => state.middle.productList;
const disabledButton = (state) => state.middle.disabled;


const PanelMiddle = (props) => {
    const dispatch = useDispatch();
    const productGroup = useSelector(productGroupSelector);
    const productList = useSelector(productListSelector);
    const disabled = useSelector(disabledButton)

    const getProducts = async () => {
        //конечно, мы можем написать экшены, которые сразу будут дергать, и переиспользовать
        //их в другой области
        //мы можем писать писать универсальные экшен креаторы, но решит ли нас воппрос в целом
        //кол-во кода все равно растет
        //СЮДА из первого редьюсера дисабл
        const productGroup = await getProductGroup();
        const productList = await getProductList();
        dispatch(setProductGroupAction(productGroup))
        dispatch(setProductListAction(productList))
        
    }

    const saveProducts = async () => {
        const result = await dispatch(saveProductAction(productList));
        console.log(result)
        //он возвращает данные и их надо обработать по своему в другом редьюсере
        
        //отсюда переносим в третий редьюсер
    }

    const handle = (id) => (e) => {
        const newProduct = {id: id, [e.target.name]: e.target.value};
        dispatch(changeProductsAction(newProduct))
    }

    // может кнопку обнулить еще для общего видения концепции
    return (
        <>
            <Button color='primary' onClick={getProducts} disabled={disabled}>
                Get product list
            </Button>
            <Grid item>
                {productList.map((item) => (
                    <Grid item key={item.id}>
                        <TextField 
                            id={`${item.id}`} label="Описание" variant="outlined"
                            value={item.description || ''}
                            onChange={handle(item.id)}
                            name='description'
                        />
                        <SelectCustom 
                            list={productGroup} value={item.productGroup}
                            handleChange={handle(item.id)}
                            name='productGroup'
                        />
                    </Grid>
                ))}
            </Grid>
            <Button color='secondary' onClick={saveProducts} disabled={disabled}>SAVE</Button>
        </>
    )
}

export default PanelMiddle;