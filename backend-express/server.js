const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 9000;

const server = app.listen(port);
const socketIO = require('socket.io')(server);

const spawn = require("child_process").spawn;

// Start the earthquake_streaming.py Python script as a child process
const earthquakeStreamingProcess = spawn("python3", ["earthquake_streaming.py"]);



socketIO.on("connection", (socket) => {
  // Pipe the output of the child process to the socket
  earthquakeStreamingProcess.stdout.on("data", (data) => {
    socket.emit("latest_quakes", data.toString());
  });

  // When the child process closes, close the socket
  earthquakeStreamingProcess.on("close", () => {
    socket.disconnect();
  });

});

console.log(`Server listening in on port ${port}`);
