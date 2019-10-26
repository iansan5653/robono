/**
 * @author Ian Sanders
 * @copyright 2019 Ian Sanders
 * @license MIT
 */

import express from "express";
import {queryAllCallees, queryMenu} from "./queries";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());

app.get("/api/all-callees", (_, res) => {
  try {
    const result = queryAllCallees();
    res.status(200).send(result);
  } catch {
    res.status(500).send("An unknown error occurred on the server.");
  }
});

app.get("/api/menus/:menuID", function(req, res) {
  try {
    const result = queryMenu(req.params.menuID);
    res.status(200).send(result);
  } catch {
    res.status(500).send("An unknown error occurred on the server.");
  }
});

app.use("/", express.static(path.join(__dirname, "..", "client", "build")));

app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
