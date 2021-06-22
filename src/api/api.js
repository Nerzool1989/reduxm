export const getProductGroup = async () => {
    let resp = await fetch('/product/group');
    try {
        let result = await resp.json();
        return {success: true, list: result};
    } catch (e) {
        return {success: false}
    }     
 }

 export const getProductList = async () => {
    let resp = await fetch('/available/productList');
    try {
        let result = await resp.json();
        return {success: true, list: result};
    } catch (e) {
        return {success: false}
    }
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
    try {
        let result = await resp.json();
        return result
    } catch (e) {
        return {success: false}
    }
}
