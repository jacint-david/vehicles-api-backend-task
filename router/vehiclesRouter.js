const { Router } = require('express');

const vehiclesRouter = new Router();

const { getAllVehicles, getInstructions, redirect, deleteVehicleById } = require('./handlers/vehiclesHandlers');

vehiclesRouter.get('/', getInstructions);

vehiclesRouter.get('/api/v1/vehicles', getAllVehicles);

vehiclesRouter.delete("/api/v1/vehicles/:id", deleteVehicleById);

vehiclesRouter.get('/*', redirect);

module.exports = vehiclesRouter;
