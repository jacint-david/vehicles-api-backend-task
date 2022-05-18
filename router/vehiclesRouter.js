const { Router } = require('express');

const vehiclesRouter = new Router();

const { getAllVehicles, getInstructions, redirect } = require('./handlers/handlers');

vehiclesRouter.get('/', getInstructions);

vehiclesRouter.get('/api/v1/vehicles', getAllVehicles);

vehiclesRouter.get('/*', redirect);

module.exports = vehiclesRouter;
