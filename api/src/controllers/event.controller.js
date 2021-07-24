const EventServices = require("../services/event.services")

const eventServices = new EventServices()

class EventController {

  async create(req, res) {
    const payload = req.body;

    const event = await eventServices.create(payload);

    return res.json(event);
  }

  async getAll(req, res) {
    const event = await eventServices.getAll();

    return res.json(event)
  }
}

module.exports = EventController;