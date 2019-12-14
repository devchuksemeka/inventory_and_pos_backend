const { buildSchema } = require('graphql')

module.exports = buildSchema(`
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
    
}

type RootMutation {
    createInventoryPurchase(data: InventoryInput): Inventory
    createInventorySale(data: InventoryInput): Inventory
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