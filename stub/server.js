const express = require('express')
const app = express();
const jsonParser = express.json();
const port = process.env.PORT || 8080

const timeout = (req, res, next) => {
  setTimeout(() => next(), 1000)
}

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
  //Здесь можете сломать запрос и посмотреть что будет
  // res.status(500).render('Что то не так')
  }
)

app.post('/available/productList', timeout, jsonParser, (req, res) => {
  //закомент
  productList = (req.body.length) ? req.body : productList;
  res.json({success: true, body: productList})
  //раскомментируйте и проверьте ошибку
  // res.status(500);
  // res.render('error')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
