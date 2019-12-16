// const Event = require('../../models/event')
const User = require('../../models/user')

const {dateToString} = require('../../helpers/date')

const events = async eventIds => {
    try{
        const events = await Event.find({
            _id:{$in : eventIds}
        })
        
       return events.map(event =>{
            return transformedEvent(event)
        })

    }catch(err){
        throw err
    }
}
const singleEvent = async eventId => {
    try{
        const event = await Event.findById(eventId )
        return transformedEvent(event)

    }catch(err){
        throw err
    }
}

const user = async userId =>{
    try{
        const user =  await User.findById(userId)
        
        return {
            ...user._doc,
            createdEvents: events.bind(this,user._doc.createdEvents)
        }
    }catch(err){
        throw err
    };
}

const transformedEvent = async (event) =>{
    return {
        ...event._doc,
        creator:user.bind(this,event.creator),
        date: dateToString(event._doc.date)
    }
}

const inventoryResource = async (inventory) =>{
    return {
        ...inventory._doc,
        // creator:user.bind(this,event.creator),
        date: dateToString(inventory._doc.date)
    }
}

const productResource = async (product) =>{
    return {
        ...product._doc,
        // creator:user.bind(this,event.creator),
        date: dateToString(product._doc.date)
    }
}


// exports.user = user;
module.exports = {
    inventoryResource,
    productResource
}
