import express from "express";
import createDB from "./db/createDB.js";

const app = express();
const executeMysql = () => {
    createDB();
};

app.listen(3000, executeMysql);