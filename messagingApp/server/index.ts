import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

import { setupSocket } from "./socketController";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the public folder

// Serve the React app from the client/build folder
const reactPath = path.join(__dirname, "..", "client/build");
console.log("react file path: ", reactPath);
app.use(express.static(reactPath));

// Set up Socket.IO events
setupSocket(io);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
