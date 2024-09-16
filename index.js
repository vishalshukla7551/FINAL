const express = require('express');
const fs = require("fs");
const mongoose=require('mongoose');
// const http = require("http");
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
// const products=data.products;
const product=require('./product.js')
const cors=require('cors');
// const server = http.createServer((req, res) => {
//   if (req.url.startsWith("/honey")) {
//     const id = req.url.split("/")[2];
//     res.end(JSON.stringify(data.products[(+id)-1]));
//   }
// });
const server = express();
server.use(express.json());
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connencted');
}
// const auth = (req, res, next) => {
//   if(req.query.password=='1234'&&req.query.password1=='123'){
//   console.log("succes");
//   next();
//   }
//   else
//   res.sendStatus(404)
// };
// server.use(auth)
// const product_router=express.Router();

// server.get('/password/:id', (req, res) => {
//   console.log(req.params);
//   res.json(products);
// });   
// server.post("/product", (req, res) => {
//   console.log(req.body);
//   products.push(req.body);
//   res.json(products);
// });
// server.put("/", (req, res) => {
//   res.end("put");
// });
// server.delete("/", (req, res) => {
//   res.end("delete");
// });
server.listen(8081, () => {
  console.log("server started");
});
server.use(cors());
server.use('/api',product.product_router);
server.use(express.static('build'));