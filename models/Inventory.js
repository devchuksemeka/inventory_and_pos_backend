const mongoose = require("mongoose")

const Schema = mongoose.Schema

const modelSchema = new Schema({
    
    quantity: {
        type:Number,
        required:true
    },
    category:{
        type: String,
        required: true
    },
    unit_price:{
        type: Number,
        required: true
    },
    date:{
        type:Date,
        required:true
    },
    product: 
    {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
},
{
    timestamps:true
});


module.exports = mongoose.model('Inventory',modelSchema)