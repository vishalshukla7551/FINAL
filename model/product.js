const mongoose=require('mongoose');
const {Schema}=mongoose;
const productSchema=new Schema({
    title: {type:String},
    description:String,
    price: {type:Number,min:[0,"wrong price"],max:[1000000,"worng price"]},
    discountPercentage: Number,
    rating: {type:Number,min:[1,"wrong rating"],max:[5,"worng rating"]},
    stock: Number,
    brand: String,
    category:String,
    thumbnail: String,
    images: [String]
  })
exports.Product=mongoose.model('Product',productSchema);