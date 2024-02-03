// Program entry point.

const http = require("node:http");

const app = require("./app");

const server = http.createServer(app);

// Don't need to be environment variables for now.
const PORT = 4242;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`server running at http://${HOST}:${PORT}`);
});
