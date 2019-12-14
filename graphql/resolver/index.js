const authResolver = require('./auth')
const inventoryResolver = require('./inventory')
// const eventsResolver = require('./events')
// const bookingResolver = require('./booking')

const rootResolver = {
    ...authResolver,
    ...inventoryResolver,
}

module.exports = rootResolver;