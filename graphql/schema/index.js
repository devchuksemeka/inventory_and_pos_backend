const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Product {
    _id: ID!
    name: String!
    quantity_category: String!
    quantity: Float!
    unit_quantity: Float!
    unit_price: Float!
    total_price: Float!
    date: String!
    createdAt:String!
    updatedAt:String!
}


input ProductInput {
    name:String!
    quantity_category: String!
    quantity: Float!
    unit_quantity: Float!
    unit_price: Float!
    total_price: Float!
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
    products: [Product!]!
    product(id:ID!): Product!
}

type RootMutation {
    createProduct(data: ProductInput): Product
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