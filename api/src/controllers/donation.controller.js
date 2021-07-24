const DonationServices = require("../services/donation.services")

const donationServices = new DonationServices()

class DonationController {

  async create(req, res) {
    const payload = req.body;

    const donation = await donationServices.create(payload);

    return res.json(donation);
  }

  async getAll(req, res) {
    const donation = await donationServices.getAll();

    return res.json(donation)
  }
}

module.exports = DonationController;