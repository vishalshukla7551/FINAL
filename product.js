const express = require('express');
const fs = require("fs");
const product_router=express.Router();
const model=require('./model/product.js');
const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const product_data=data.products;
const Product=model.Product;
product_router
.get('/product/:id', async (req, res) => {
  const id=req.params.id;
   const get_product=await Product.find({_id:id});
   res.status(201).json(get_product);
  })
  .get('/product',async (req, res) => {
    const get_product=await Product.find();
    res.status(201).json(get_product);
   })
  .post('/product', async (req, res) => {
    try{
      await product_data.forEach(async data1=>{
      const product=new Product(data1);
      await product.save();
    })
    res.send("succesful file get save");
    }
    catch(err)
    {res.json(err);}
  })
    .patch("/product/:id",async (req, res) => {
     try{
      const id=req.params.id;
       const product1=await Product.findOneAndUpdate({'title':'money'},{'price':6969},{new:true,upsert:true});
      res.json(product1);
      }
      catch(err)
      {res.json(err);}
  })
  .delete("/product", (req, res) => {
    res.end("delete");
  });
  exports.product_router=product_router;
