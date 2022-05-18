const Express = require('express');

const server = new Express();

const PORT = process.env.PORT || 3000;

server.listen(PORT, async () => {
  try {
    console.log(`Server is listening on port: ${PORT}. Awaiting orders Captain!`);
  } catch (error) {
    console.log(`Server couldn't start listening on port: ${PORT}, due to this error: ${error}`);
  }
});
