const Inventory = require('../../models/Inventory')
const Product = require('../../models/Product')
const User = require('../../models/User')

const {inventoryResource} = require('./merge')

module.exports = {
    inventories: async ()=>{
        try{
            const products = await Inventory.find()
            return products.map(product=>{
                return inventoryResource(product)
            })
        }catch(err){
            throw err
        }
    },
    inventoriesCategories: async (args)=>{
        try{
            const products =  await Inventory.find({category:args.category})
            return products.map(product=>{
                return inventoryResource(product)
            })
        }catch(err){
            throw err
        }
    },
    inventory: async (args,req)=>{
        try{
            const product = await Inventory.findById(args.id)
            return inventoryResource(product)
            
        }catch(err){
            throw err
        }
    },
    createInventoryPurchase: async (args,req)=>{

        const inventory_purchase_spread = {...args.data}
        inventory_purchase_spread.date = new Date(inventory_purchase_spread.date)
        inventory_purchase_spread.category = "PURCHASE"
        
        const product = await Product.findById(inventory_purchase_spread.product);
        if(!product) throw new Error("Product Not Found") 
        
        inventory = {
            ...inventory_purchase_spread,
            unit_price:product.cost_price
        }

        const inventory_purchase = new Inventory(inventory)
        let createdInventoryPurchase;
        try{
            const result = await inventory_purchase.save()
            createdInventoryPurchase = inventoryResource(result) 
            return createdInventoryPurchase;
        }catch(err){
            console.log(err)
            throw err;
        }
    },
    createInventorySales: async (args,req)=>{

        const inventory_purchase_spread = {...args.data}
        inventory_purchase_spread.date = new Date(inventory_purchase_spread.date)
        inventory_purchase_spread.category = "SALES"
        
        const product = await Product.findById(inventory_purchase_spread.product);
        if(!product) throw new Error("Product Not Found") 
        
        inventory = {
            ...inventory_purchase_spread,
            unit_price:product.sales_price
        }

        const inventory_purchase = new Inventory(inventory)
        let createdInventoryPurchase;
        try{
            const result = await inventory_purchase.save()
            createdInventoryPurchase = inventoryResource(result) 
            return createdInventoryPurchase;
        }catch(err){
            console.log(err)
            throw err;
        }
    }
}