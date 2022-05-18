const Express = require('express');

const { Router } = Express;

const server = new Express();
const vehiclesRouter = require('../router/vehiclesRouter');

const PORT = process.env.PORT || 3000;

server.use('/', vehiclesRouter);

server.listen(PORT, async () => {
  try {
    console.log(`Server is listening on port: ${PORT}. Awaiting orders Captain!`);
  } catch (error) {
    console.log(`Server couldn't start listening on port: ${PORT}, due to this error: ${error}`);
  }
});

module.exports = Express;
