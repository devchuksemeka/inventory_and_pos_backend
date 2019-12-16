const Product = require('../../models/Product')
const User = require('../../models/user')

const {productResource} = require('./merge')

module.exports = {
    // inventories: async ()=>{
    //     try{
    //         const products = await Inventory.find()
    //         return products.map(product=>{
    //             return inventoryResource(product)
    //         })
    //     }catch(err){
    //         throw err
    //     }
    // },
    // inventory: async (args,req)=>{
    //     try{
    //         const product = await Inventory.findById(args.id)
    //         return inventoryResource(product)
            
    //     }catch(err){
    //         throw err
    //     }
    // },
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