const express = require('express')
const app = express();
const jsonParser = express.json();
const port = process.env.PORT || 8080

const timeout = (req, res, next) => {
  setTimeout(() => next(), 1000)
}

//список данных получаем и отрисовываем для редактирования, после чего отображаем в другом
//в нижнем поле эти данные со служебной информацие к примеру (селект мб)
const productGroup = ['Овощи', 'Фрукты', 'Кондитерка', 'Мясо'];

let productList = [
  {id: 0, description: 'Зеленое яблоко - вкусно', productGroup: 'Овощи'},
  {id: 1, description: '', productGroup: ''},
];


app.get('/product/group', (req, res) => {
  res.json(productGroup)
})

app.get('/available/productList', timeout, (req, res) => {
  res.json(productList)
  }
)

app.post('/available/productList', timeout, jsonParser, (req, res) => {
  //может обогатить кол-во изменений?
  productList = (req.body.length) ? req.body : productList;
  res.json({success: false, body: productList})
  // res.status(500);
  // res.render('error')
})

//один из запросов должен ориентироваться не только на 200 но и на success

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
