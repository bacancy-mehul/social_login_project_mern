import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./config/db/dbConnection";
import { logger, level } from "./config/logger/logger";
import AppRoutes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/healthCheck", (req, res) => res.json({ msg: "Server is running" }));
app.use("/api", AppRoutes);

const PORT = process.env.PORT;
const handleListening = () => {
  logger.log(level.info, `Server is running on port ${PORT}`);
};
app.listen(PORT, handleListening);
