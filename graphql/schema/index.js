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
    product: String!
    quantity: Float!
    unit_price: Float!
    total_price: Float!
    date: String!
    category: String!
    createdAt:String!
    updatedAt:String!
}


input InventoryPurchaseInput {
    product: String!
    quantity: Float!
    date: String!
}

input InventorySalesInput {
    product: String!
    quantity: Float!
    date: String!
}

input UserInput {
    email: String!
    password: String!
}

input LoginInput {
    email: String!
    password: String!
}

input RegisterInput {
    email: String!
    password: String!
}

type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

type User {
    _id: ID!
    email:String!
}

type RootQuery {
    inventories: [Inventory!]!
    inventoriesCategories(category:String!): [Inventory!]!
    inventory(id:ID!): Inventory!
    products: [Product!]! 
    product(id:ID!): Product!
}

type RootMutation {
    register(data: RegisterInput): User!
    login(data: LoginInput): AuthData!
    createInventoryPurchase(data: InventoryPurchaseInput): Inventory!
    createInventorySales(data: InventorySalesInput): Inventory!
    createProduct(data: ProductInput): Product!
}

schema{
    query: RootQuery
    mutation: RootMutation
}
`)
