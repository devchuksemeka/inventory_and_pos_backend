const mongoose = require("mongoose")

const Schema = mongoose.Schema

const modelSchema = new Schema({
    name: { type:String,required:true },
    type: { type:String, required:true },
    category: { type:String,  required:true},
    image: { type:String, required:true },
    cost_price: { type:Number, required:true },
    sales_price: {type:Number,required:true},
    product_tax:{type:Number, required:true},
    tax_method:{type:String,required:true},
    alert_quantity:{type:Number,required:true},
    date:{type:Date,required:true},
},
{
    timestamps:true
});


module.exports = mongoose.model('Product',modelSchema)