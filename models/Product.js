const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({

    name: {
        type:String,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    quantity_category: {
        type:String,
        required:true
    },
    unit_quantity:{
        type:Number,
        required:true
    },
    unit_price:{
        type: Number,
        required: true
    },
    total_price:{
        type: Number,
        required: true
    },
    date:{
        type:Date,
        required:true
    },
},
{
    timestamps:true
});


module.exports = mongoose.model('Product',productSchema)