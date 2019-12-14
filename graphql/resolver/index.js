const authResolver = require('./auth')
const productsResolver = require('./product')
const eventsResolver = require('./events')
const bookingResolver = require('./booking')

const rootResolver = {
    ...authResolver,
    ...productsResolver,
    ...eventsResolver,
    ...bookingResolver
}

module.exports = rootResolver;