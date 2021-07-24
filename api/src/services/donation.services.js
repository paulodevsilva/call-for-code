const Donation = require('../models/Donation');

class DonationServices {

  async create(payload) {
    const donation = await Donation.create(payload);
    
    return donation;
  }

  async getAll() {
     const donationsAlreadyExists = await Donation.find().populate(['donator', 'beneficiary', 'event'])
    

     if (!donationsAlreadyExists) {
        throw new Error('Donations not found');
     } 
    
     const donations = donationsAlreadyExists.map(donation => (
       { id: donation._id,
         type: donation.type,
         beneficiary: {
            id: donation.beneficiary._id,
            name: donation.beneficiary.name,
            email: donation.beneficiary.email
          },
          donator: {
            id: donation.donator._id,
            name: donation.donator.name,
            email: donation.donator.email
          },
          event: {
            id: donation.event._id,
            name: donation.event.name,
            address: donation.event.address,
            car: donation.event.car
          }
        }));

     return donations;

  }
}

module.exports = DonationServices;