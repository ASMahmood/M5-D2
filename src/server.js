const express = require("express");
const studRoutes = require("./students");

const server = express();
const port = 6969;

server.use(express.json());
server.use("/students", studRoutes);

server.listen(port, () => {
  console.log(`PeepoRun at port: ${port}/`);
});
