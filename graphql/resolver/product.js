const Product = require('../../models/Product')
const Event = require('../../models/event')
const User = require('../../models/user')

const {transformedEvent,productResource} = require('./merge')

module.exports = {
    products: async ()=>{
        try{
            const products = await Product.find()
            return products.map(product=>{
                return productResource(product)
            })
        }catch(err){
            throw err
        }
    },
    product: async (args,req)=>{
        try{
            const product = await Product.findById(args.id)
            return productResource(product)
            
        }catch(err){
            throw err
        }
    },
    createProduct: async (args,req)=>{

        const product_spread = {...args.data}
        product_spread.date = new Date(product_spread.date)
        

        const product = new Product(product_spread)
        let createdProduct;
        try{
            const result = await product.save()
            createdProduct = productResource(result) 
            // const creator = await User.findById(req.userId)
        
            // if(!creator) throw new Error("User does not exist")
            // creator.createdEvents.push(event);
            // await creator.save()
            return createdProduct;
        }catch(err){
            console.log(err)
            throw err;
        }
    }
}