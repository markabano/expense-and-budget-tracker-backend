import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.mjs";
import { User, Expense, Category, Budget } from "./models/index.mjs";

const app = express();
dotenv.config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established succesfully.");

    await sequelize.sync().then(() => {
      console.log("Database synced (development mode).");
    });
    // await sequelize.sync({
    //     alter: true,
    // });
    // console.log("All models synced");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  } finally {
    console.log("Database Sync Successfully");
  }
})();

export default app;
