const { buildSchema } = require('graphql')

module.exports = buildSchema(`

type Product {
    _id: ID!
    name: String!
    type: String!
    category: String!
    image: String!
    cost_price: Float!
    sales_price: Float!
    product_tax: Float!
    alert_quantity: Float!
    date: String!
    tax_method: String!
    createdAt:String!
    updatedAt:String!
}

input ProductInput {
    name:String!
    type:String!
    category: String!
    image: String!
    cost_price: Float!
    sales_price: Float!
    product_tax: Float!
    alert_quantity: Float!
    tax_method: String!
    date: String!
}


type Inventory {
    _id: ID!
    name: String!
    quantity_category: String!
    quantity: Float!
    unit_quantity: Float!
    unit_price: Float!
    total_price: Float!
    date: String!
    category: String!
    createdAt:String!
    updatedAt:String!
}


input InventoryInput {
    name:String!
    quantity_category: String!
    quantity: Float!
    unit_quantity: Float!
    unit_price: Float!
    total_price: Float!
    category: String!
    date: String!
}



input UserInput {
    email: String!
    password: String!
}

type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

type RootQuery {
    inventories: [Inventory!]!
    inventoriesCategories(category:String!): [Inventory!]!
    inventory(id:ID!): Inventory!
    product(id:ID!): Product!
}

type RootMutation {
    createInventoryPurchase(data: InventoryInput): Inventory!
    createInventorySale(data: InventoryInput): Inventory!
    createProduct(data: ProductInput): Product!
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`)

// type RootQuery {
//     products: [Product!]!
//     # bookings: [Booking!]!
//     # login(email: String!,password: String!): AuthData!
// }