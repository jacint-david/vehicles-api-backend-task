const db = require('../../database/models/index');

module.exports = {
  getAllVehicles: async (req, res) => {
    try {
      const vehicles = await db.Vehicle.findAll();
      res.json(vehicles);
    } catch (err) {
      console.log("Couldn't get all vehicles due to this error:", err);
    }
  },
  getInstructions: async (req, res) => {
    res.send("Use the '/api/v1/vehicles' path to interact with the Vehicles API");
  },
  redirect: async (req, res) => {
    res.redirect('/');
  },
};
