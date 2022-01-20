import express from "express";
import databaseWorldQuery from "./db/queries.js";
const app = express();

app.listen(3000, databaseWorldQuery);