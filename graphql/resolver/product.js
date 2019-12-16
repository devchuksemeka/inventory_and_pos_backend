const Product = require('../../models/Product')
const User = require('../../models/user')

const {productResource} = require('./merge')

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
            if(!product) throw new Error("Product not found")
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
            return createdProduct;
        }catch(err){
            console.log(err)
            throw err;
        }
    }
}