const db = require('../../database/models/index');

module.exports = {
  getAllVehicles: async (req, res) => {
    try {
      const vehicles = await db.Vehicle.findAll({raw: true});
      // vehicles.forEach(vehicle => {vehicle["makeModel"] = `${vehicle.make} - ${vehicle.model}`});

      const vehiclesWithoutTimestamps = vehicles.map(vehicle => {
        return ({
        id : vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        makeModel: `${vehicle.make} - ${vehicle.model}`
      })
    })
      console.log(vehiclesWithoutTimestamps);
      res.json(vehiclesWithoutTimestamps);

    } catch (err) {
      console.log("Couldn't get all vehicles due to this error:", err);
    }
  },
  deleteVehicleById : async (req, res) => {
    const id = req.params.id;
    const vehicleToDelete = await db.Vehicle.destroy({where: {
      id
    }});
    console.log(vehicleToDelete);
    res.sendStatus(204);
  },

  getInstructions: async (req, res) => {
    res.send("Use the '/api/v1/vehicles' path to interact with the Vehicles API");
  },
  redirect: async (req, res) => {
    res.redirect('/');
  },
};
