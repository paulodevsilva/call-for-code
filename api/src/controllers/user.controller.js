const UserServices = require("../services/user.services")

const userServices = new UserServices()

class UserController {

  async create(req, res) {
    const payload = req.body;

    const user = await userServices.create(payload);

    return res.json(user);
  }

  async login(req, res) {
    const payload = req.body;

    const user = await userServices.login(payload);

    return res.json(user);
  }
}

module.exports = UserController;