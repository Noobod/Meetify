import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToServer } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToServer(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  app.set("mongo_user");
  const connectionDB = await mongoose.connect(
    "mongodb+srv://ykapil086:G4PKUM1igUvz6xOU@meetify.jufyko6.mongodb.net/?retryWrites=true&w=majority&appName=Meetify"
  );
  console.log(`MONGO Connected DB Host: ${connectionDB.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("listening on port 8000");
  });
};

start();
