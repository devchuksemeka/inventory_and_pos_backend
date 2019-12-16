const authResolver = require('./auth')
const productResolver = require('./product')
const inventoryResolver = require('./inventory')
// const eventsResolver = require('./events')
// const bookingResolver = require('./booking')

const rootResolver = {
    ...authResolver,
    ...inventoryResolver,
    ...productResolver,
}

module.exports = rootResolver;