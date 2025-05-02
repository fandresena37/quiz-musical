import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import route from "./src/routes/authentification.routes.mjs";
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(route);
app.use((req, res) => {
  res.status(404);
});
app.listen(port, () => {
  console.log("serveur en ecoute sur le port " + port);
});
