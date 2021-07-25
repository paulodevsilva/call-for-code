const Event = require('../models/Event');

class EventServices {

  async create(payload) {
    const eventAlreadyExists = await Event.findOne({ car: payload.car });

    if (eventAlreadyExists) {
      throw new Error('Event already exists');
    }

    const event = await Event.create(payload);
    
    return event;
  }

  async getAll() {
     const eventsAlreadyExists = await Event.find().populate('beneficiary_id');
    
     if (!eventsAlreadyExists) {
        throw new Error('Events not found');
     } 
    
     const events = eventsAlreadyExists.map(event => (
       { id: event._id,
         name: event.name,
         address: event.address,
         car: event.car,
         beneficiary: {
            id: event.beneficiary._id,
            name: event.beneficiary.name,
            email: event.beneficiary.email
          }
        }));

     return events;

  }
}

module.exports = EventServices;